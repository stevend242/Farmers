// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EfficientAgriculturalSupplyChain {
    // Struct for Product with minimal fields to reduce gas cost
    struct Product {
        uint256 id;
        address payable farmer; // Use payable to avoid explicit casting later
        uint256 pricePerUnit; // Price per unit
        uint256 availableUnits; // Units available for sale
    }

    // Struct for Order with minimized complexity
    struct Order {
        uint256 productId;
        address buyer;
        uint256 orderedUnits;
        bool fulfilled;
    }

    // Mappings to store products and orders
    mapping(uint256 => Product) public products;
    mapping(uint256 => Order) public orders;

    uint256 public productCounter;
    uint256 public orderCounter;

    event ProductListed(uint256 productId, address indexed farmer, uint256 pricePerUnit, uint256 availableUnits);
    event OrderPlaced(uint256 orderId, uint256 productId, address indexed buyer, uint256 orderedUnits);
    event OrderFulfilled(uint256 orderId, uint256 productId, address indexed farmer, address indexed buyer);

    // Function to list a new product with gas-efficient code
    function listProduct(uint256 pricePerUnit, uint256 availableUnits) public {
        require(pricePerUnit > 0, "Price must be positive");
        require(availableUnits > 0, "Available units must be positive");

        productCounter++;
        products[productCounter] = Product(productCounter, payable(msg.sender), pricePerUnit, availableUnits);

        emit ProductListed(productCounter, msg.sender, pricePerUnit, availableUnits);
    }

    // Function to place an order with minimal gas usage
    function placeOrder(uint256 productId, uint256 orderedUnits) public payable {
        Product storage product = products[productId];
        require(orderedUnits > 0, "Ordered units must be positive");
        require(product.availableUnits >= orderedUnits, "Not enough available units");
        
        uint256 totalPrice = product.pricePerUnit * orderedUnits;
        require(msg.value >= totalPrice, "Insufficient payment");

        orderCounter++;
        orders[orderCounter] = Order(productId, msg.sender, orderedUnits, false);

        emit OrderPlaced(orderCounter, productId, msg.sender, orderedUnits);
    }

    // Function to fulfill an order, focusing on gas efficiency
    function fulfillOrder(uint256 orderId) public {
        Order storage order = orders[orderId];
        Product storage product = products[order.productId];
        
        require(!order.fulfilled, "Order already fulfilled");
        require(msg.sender == product.farmer, "Only the farmer can fulfill the order");

        // Deduct ordered units from product
        product.availableUnits -= order.orderedUnits;
        
        // Fulfill order and transfer payment to the farmer
        order.fulfilled = true;
        product.farmer.transfer(product.pricePerUnit * order.orderedUnits);

        emit OrderFulfilled(orderId, order.productId, product.farmer, order.buyer);
    }

    // Function to retrieve product details
    function getProduct(uint256 productId) public view returns (Product memory) {
        return products[productId];
    }

    // Function to retrieve order details
    function getOrder(uint256 orderId) public view returns (Order memory) {
        return orders[orderId];
    }
}
