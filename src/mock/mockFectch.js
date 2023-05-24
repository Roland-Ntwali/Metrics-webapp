const country = {
  country: '',
  countryInfo: [],
};

const countries = []; // Define the 'countries' variable

export default async function mockFetch(url) {
  switch (url) { // Use the 'url' parameter in the switch statement
    case 'https://disease.sh/v3/covid-19/countries': {
      return {
        ok: true,
        status: 200,
        json: async () => countries, // Use the 'countries' variable
      };
    }
    case 'https://disease.sh/v3/covid-19/country': { // Change the duplicate case label
      return {
        ok: true,
        status: 200,
        json: async () => country,
      };
    }
    default: {
      throw new Error(`Unhandled request: ${url}`); // Use the 'url' parameter
    }
  }
}
