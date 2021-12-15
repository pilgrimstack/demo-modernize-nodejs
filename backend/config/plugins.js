module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3-enhanced',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID', 'FAKEACCESSKEY'),
      secretAccessKey: env('AWS_ACCESS_SECRET', 'FAKESECRETKEY'),
      region: env('AWS_REGION', 'FAKEREGION'),
      params: {
        Bucket: env('AWS_BUCKET', 'FAKEBUKET'),
      },
	customDomain: env('CDN_DOMAIN', 'FAKECDN'),
      endpoint: env('CUSTOM_S3_ENDPOINT', 'FAKEENDPOINT'), // For third-party S3-compatible storages
      prefix: null,
      quality: 80,
      webp: true,
      webpConfig: {},
      accessLevel: env('ACCESS_LEVEL', 'public-read'), // Default set to: 'public-read'
      thumbnails: [
        {
          name: 'custom',
          options: {
            width: 1200,
            withoutEnlargement: true,
          },
        },
        {
          name: 'preview',
          options: {
            width: 500,
            height: 300,
            fit: 'cover',
          },
          outputOptions: {},
        },
      ],
    },
  },
});
