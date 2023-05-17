import axios from 'axios';
import fetchRockets from '../redux/rockets/rocketsAPI';

jest.mock('axios');

describe('fetchRockets', () => {
  it('fetches successfully data from SpaceX API', async () => {
    const data = {
      data: [
        {
          id: 1,
          rocket_name: 'Falcon 1',
          description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
          flickr_images: ['https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'],
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchRockets()).resolves.toEqual(data.data);

    expect(axios.get).toHaveBeenCalledWith('https://api.spacexdata.com/v3/rockets');
  });

  it('fetches erroneously data from SpaceX API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(fetchRockets()).rejects.toThrow(errorMessage);
  });
});
