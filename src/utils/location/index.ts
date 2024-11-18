import axios from "axios";
import { mapboxConfig } from "../../configs/mapbox.config";

type TFeatureCollection = {
  type: string;
  features: {
    type: string;
    id: string;
    geometry: {
      type: string;
      coordinates: number[];
    };
    properties: {
      mapbox_id: string;
      feature_type: string;
      full_address: string;
      name: string;
      name_preferred: string;
      coordinates: {
        longitude: number;
        latitude: number;
      };
      place_formatted: string;
      bbox: number[];
      context: {
        place: {
          mapbox_id: string;
          name: string;
          wikidata_id: string;
          short_code?: string;
        };
        region: {
          mapbox_id: string;
          name: string;
          wikidata_id: string;
          region_code: string;
          region_code_full: string;
        };
        country: {
          mapbox_id: string;
          name: string;
          wikidata_id: string;
          country_code: string;
          country_code_alpha_3: string;
        };
        locality?: {
          mapbox_id: string;
          name: string;
          wikidata_id: string;
        };
        postcode?: {
          mapbox_id: string;
          name: string;
        };
        neighborhood?: {
          mapbox_id: string;
          name: string;
          wikidata_id: string;
        };
      };
    };
  }[];
};

// Reverse Geocoding ----------------------------------------------------------------------------------------
export async function reverseGeocode({ lat, lon }: { lat?: number; lon?: number }) {
  const endpoint = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lon || 0}&latitude=${lat || 0}&access_token=${
    mapboxConfig.publicAccessToken
  }`;
  const response = await axios.get(endpoint);
  const featureCollection = response.data as TFeatureCollection;
  return featureCollection.features?.[0];
}
