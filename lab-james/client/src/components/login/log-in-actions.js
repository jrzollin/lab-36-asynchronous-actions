import superagent from 'superagent';

export const userCreate = payload => dispatch => {
  superagent.post(`${__SERVER_URL__}/createUser`)
    .send(payload)
    .then(res => dispatch(createAction(res.body)))
    .catch(console.err);
};

const createAction = user => ({
  type: 'USER_CREATE',
  payload: user,
});
