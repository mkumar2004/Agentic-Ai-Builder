import WorksoaceClient from '@/components/WorksoaceClient';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

interface WorkspacePagesProps {
  searchParams: Promise<{ prompt?: string; id?: string }>;
}

const WorkspacePage = async ({ searchParams }: WorkspacePagesProps) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const { prompt, id } = await searchParams;

  return (
    <div>
       <WorksoaceClient/>
    </div>
  );
};

export default WorkspacePage;