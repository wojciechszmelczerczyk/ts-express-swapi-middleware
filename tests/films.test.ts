import { getFilmsService } from "../services/getFilms";

describe("GET /films", () => {
  test("when id is not provided return all films", async () => {
    const { data } = await getFilmsService();
    expect(data.results.length).toBe(6);
  });
});
