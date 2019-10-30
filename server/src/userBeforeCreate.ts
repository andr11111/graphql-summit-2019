import gql from 'graphql-tag';

type TriggerResult = {
  data: {
    result: string,
  }
};

export default async (event: any, ctx: any) : Promise<TriggerResult> => {
  const { email } = event.data

  console.log("TEST: ", email)

  return {
    data: {
      ...event.data,
      salesforceAccount: {
        connect: {
          'Email__c': email
        }
      }
    }
  };
};