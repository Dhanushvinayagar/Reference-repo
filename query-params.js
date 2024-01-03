// encodedUri is used to encode the special characters , if not mentioned then the decoding in backend is misleading the original value

const url = 'https://fake-api.kindacode.com/tutorials?paramOne=one&paramTwo=two&paramThree=three&foo=1&bar=2'
const req = axios.get(
  encodeURI(url)
)

// this is equivalent to
const res = await axios.get('https://fake-api.kindacode.com/tutorials', {
        params: {
          paramOne: 'one',
          paramTwo: 'two',
          paramThree: 'three',
          foo: 1,
          bar: 2,
        },
      });