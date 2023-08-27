const baseUrl = 'http://localhost:3001';

// Retrieve all objects of the specified
// category from the /models/category route
export async function getCategory (name = 'Default') {
  try {
    const response = await fetch(`${baseUrl}/models/category/${name}`);
    const categoryWeeObjects = await response.json();
    return categoryWeeObjects;
  } catch (err) {
    console.log(err);
  }
}
