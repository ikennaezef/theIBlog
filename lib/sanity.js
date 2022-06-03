import {
  createClient,
  createPreviewSubscriptionHook,
  // createImageUrlBuilder,
  // createPortableTextComponent
} from 'next-sanity';

import {
  createImageUrlBuilder
} from '@sanity/image-url';

import {
  createPortableTextComponent
} from '@portabletext/react'


const config = {
  projectId: 'x321hqkw',
  dataset: 'blog_studio',
  apiVersion: '2021-10-21',
  useCdn: false,
}

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
})