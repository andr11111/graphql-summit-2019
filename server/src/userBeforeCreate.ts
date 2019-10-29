import gql from 'graphql-tag';

/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom trigger functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/8base-console/custom-functions/triggers
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    trigger:
 *      ...
 *
 * Data that is sent to the function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * To invoke this function locally, run:
 *  8base invoke-local trigger -p src/triggers/trigger/mocks/request.json
 */

type TriggerResult = {
  data: {
    result: string,
  }
};

export default async (event: any, ctx: any) : Promise<TriggerResult> => {
  const { email } = event.data

  console.log("TRIGGER TEST!!!!")

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