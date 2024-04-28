const FIREBASE_DOMAIN = 'https://react-https-17757-default-rtdb.firebaseio.com';

export async function getAllContacts() {
  const response = await fetch(`${FIREBASE_DOMAIN}/contacts.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch contacts.');
  }

  const transformedContacts = [];

  for (const key in data) {
    const contactObj = {
      id: key,
      ...data[key],
    };

    transformedContacts.push(contactObj);
  }

  return  transformedContacts;
}

export async function getSingleContact(contactId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/${contactId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch contact.');
  }

  const loadedContact = {
    id: contactId,
    ...data,
  };

  return loadedContact;
}

export async function addContact(contactData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/contacts.json`, {
    method: 'POST',
    body: JSON.stringify(contactData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create contact.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
