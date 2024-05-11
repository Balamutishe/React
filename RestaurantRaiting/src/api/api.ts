import { validateResponse } from '../utils/validateResponse';
import { z } from 'zod';

const API_URL = 'http://localhost:3000';

export const RestaurantSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  raiting: z.number(),
  url: z.string(),
});

export type Restaurant = z.infer<typeof RestaurantSchema>;

export const RestaurantList = z.array(RestaurantSchema);

export type RestaurantList = z.infer<typeof RestaurantList>;

export function getRestaurants(): Promise<RestaurantList> {
  return fetch(`${API_URL}/restaurants`)
    .then(validateResponse)
    .then((res) => res.json())
    .then((data) => RestaurantList.parse(data));
}

export const UpdateRestaurantRaitingSchema = z.object({
  id: z.string(),
  raiting: z.number(),
});

export type UpdateRestaurantRaitingResponse = z.infer<
  typeof UpdateRestaurantRaitingSchema
>;

export function updateRestaurantRating({
  id,
  raiting,
}: UpdateRestaurantRaitingResponse): Promise<Restaurant> {
  return fetch(`${API_URL}/restaurants/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ raiting }),
  })
    .then(validateResponse)
    .then((res) => res.json());
}
