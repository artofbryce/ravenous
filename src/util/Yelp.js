// Yelp API key
const apiKey = `SSD7GeCJli3idKROfC4acBdeZaKuGtgB4Qoqle2qAIm-4oYzMgiNoHixJEybmDpIGPy-uh4UGHYpPvXJ1vrYIHlIQqKZEnZZMbtw_R4Ch-fYAJP_p4QPMKsE2_XnWnYx`;

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: {
        Authorization: `Bearer ${apiKey}`
      } }).then( response => { return response.json(); } ).then(
        jsonResponse => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map( business => {
              id: business.id;
              imageSrc: business.image_url;
              name: business.name;
              address: business.location.display_address;
              city: business.location.city;
              state: business.location.state;
              zipCode: business.location.zip_code;
              category: business.categories;
              rating: business.rating;
              reviewCount: business.review_count;
            });
          }
        })
      }
    };

export default Yelp;
