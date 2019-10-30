import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo';
import useForm from 'react-hook-form'

// const PROFILE_QUERY = gql``;

// const CLAIMS_QUERY = gql``;

// const CREATE_CLAIM = gql``;


// let AccountInfo = () => {
//   const { loading, data } = useQuery(PROFILE_QUERY);

//   if (loading) return <span>Loading...</span>;

//   return (
//     <ul>
//       <li>
//         Name: {data.user.salesforceAccount.Name}
//       </li>
//       <li>
//         Email: {data.user.email}
//       </li>
//     </ul>
//   )
// }

// let Policies = ({ selectedPolicyId, onSelectPolicy }) => {
//   const { loading, data } = useQuery(PROFILE_QUERY);

//   if (loading) return <span>Loading...</span>;

//   let cssClass = (selected) => selected ? 'clickable selected' : 'clickable';

//   const policyItems = data.user.salesforceAccount.Policies__r.items.map((policy) =>
//     <li className={cssClass(selectedPolicyId === policy.id)} key={policy.id} onClick={() => onSelectPolicy(policy.id)}>
//       {policy.Name}, from: {policy.StartDate__c}, to: {policy.EndDate__c}
//     </li>
//   )

//   return (
//     <ul>{ policyItems }</ul>
//   )
// }

// let Claims = ({ policyId }) => {
//   const { loading, data } = useQuery(CLAIMS_QUERY, { variables: { policyId }});
//   if (loading) return <span>Loading...</span>;

//   const claimItems = data.salesforce.policy__c.claims.items.map(claim =>
//     <li key={claim.id}>{claim.description}, created on {new Date(claim.createdAt).toLocaleDateString()}</li>
//   )

//   return (
//     <ul>{ claimItems }</ul>
//   )
// }

// let NewClaimForm = ({ policyId, onSubmit }) => {
//   const { register, handleSubmit, watch, errors } = useForm()

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//     {/* register your input into the hook by invoking the "register" function */}
//       <input name="description" defaultValue="" ref={register({ required: true })} />
//       <input type="submit" />
//     </form>
//   )
// }

// let Profile = () => {
//   const [policyId, setPolicyId] = useState(null);

//   const [showForm, setShowForm] = useState(false);
//   const [createClaim, { data }] = useMutation(CREATE_CLAIM);

//   const onSubmit = async data => {
//     await createClaim({
//       variables: {
//         description: data.description,
//         policyId
//       },
//       refetchQueries: ['ClaimsQuery']
//     })
//     setShowForm(false)
//   }

//   const selectPolicy = (policyId) => {
//     setPolicyId(policyId)
//     setShowForm(false)
//   }

//   return (
//       <div>
//         <h1>Account Info</h1>
//         <AccountInfo />
//         <h1>Policies</h1>
//         <Policies selectedPolicyId={policyId} onSelectPolicy={selectPolicy} />
//         { policyId &&
//           <>
//             <h1>Claims (<span className='clickable' onClick={() => setShowForm(true)}>+</span>)</h1>
//             <Claims policyId={policyId} />
//           </>
//         }
//         { showForm &&
//           <>
//             <h1>Submit Claim</h1>
//             <NewClaimForm policyId={policyId} onSubmit={onSubmit} />
//           </>
//         }
//       </div>
//   )
// };

let Profile = () => {
  return (
      <div>
        <h1>Account Info</h1>
        <h1>Policies</h1>
        <h1>Claims</h1>
      </div>
  )
};

export { Profile };
