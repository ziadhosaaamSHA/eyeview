import React from "react";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import configPromise from '@payload-config'
import { getPayload, type CollectionSlug } from 'payload'

const Home = async () => {
  const payload = await getPayload({config: configPromise})
  const data = await payload.find({
    collection: 'categories' as CollectionSlug,
  })
  return (
    <Container>
      <HomeBanner />
      {JSON.stringify(data, null, 2)}
    </Container>
  );
}

export default Home;