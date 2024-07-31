

export const HeroSection = () => (
  <Container className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 text-center">
    <Typography variant="h1" className="text-5xl font-bold">Welcome to Farmer's Market</Typography>
    <Typography variant="body1" className="mt-4 text-lg">Join us and sell your produce directly to buyers.</Typography>
    <div className="mt-8 flex justify-center space-x-4">
      <Button variant="contained" color="primary">Join as a Farmer</Button>
      <Button variant="outlined" color="secondary">Explore Marketplace</Button>
    </div>
  </Container>
);
