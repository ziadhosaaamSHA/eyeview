'use client';
import React from "react";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.auth.session.queryOptions());

  return (
    <Container>
      {JSON.stringify(data?.user, null, 2)}
      <HomeBanner />
    </Container>
  );
}

export default Home;