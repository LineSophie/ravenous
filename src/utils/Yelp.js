/*
 This is the utility object responsible for making requests to the Yelp Fusion API to search for businesses.
 The 'search' method allows you to search for businesses based on search term, location, and sorting options.
 It returns an array of business objects, each containing information such as ID, image, name, address, category, rating,
 review count, and price.
 If the request fails, it handles errors and logs them to the console.
*/

const apiKey = '';

const Yelp = {
  async search(term, location, sortBy) {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            price: business.price
          }));
        }
      } else {
        throw new Error('Request failed with status code ' + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Yelp;