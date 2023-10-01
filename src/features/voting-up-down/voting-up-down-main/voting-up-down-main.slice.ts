import { createSlice } from '@reduxjs/toolkit';
import { postCardsListMockArray } from '../../../mock-data/mock-data-posts';

type Payload = {
  cardId: number;
};

type Rating = {
  voteUpNum: number;
  voteDownNum: number;
  userVote: 'up' | 'down' | null;
};

// const fieldsFromMockArrayForRating = [
//   'id',
//   'userVote',
//   'votedDownNum',
//   'votedUpNum',
// ];

// const votingFromMockArrayForRating = postCardsListMockArray.map((i) =>
//   Object.fromEntries(fieldsFromMockArrayForRating.map((f) => [f, i[f]]))
// );

const votingFromMockArrayForRating = postCardsListMockArray.reduce(
  (accumulator, value) => {
    return {
      ...accumulator,
      [value.id]: {
        voteUpNum: value.votedUpNum,
        voteDownNum: value.votedDownNum,
        userVote: value.userVote,
      } as Rating,
    };
  },
  {}
);

export const votingNumberUpDown = createSlice({
  name: 'votingNumberUpDown',
  initialState: votingFromMockArrayForRating as Record<number, Rating>,
  reducers: {
    setVoteUp(state, action: { payload: Payload }) {
      const data = state[action.payload.cardId];
      if (!data) return;

      if (data.userVote === 'up') {
        data.voteUpNum--;
        data.userVote = null;
        return;
      }

      if (data.userVote === 'down') {
        data.voteDownNum--;
      }
      data.voteUpNum++;
      data.userVote = 'up';
    },
    setVoteDown(state, action: { payload: Payload }) {
      const data = state[action.payload.cardId];
      if (!data) return;

      if (data.userVote === 'down') {
        data.voteUpNum--;
        data.userVote = null;
        return;
      }

      if (data.userVote === 'up') {
        data.voteUpNum--;
      }
      data.voteDownNum++;
      data.userVote = 'down';
    },
  },
});

export const {
  actions: { setVoteUp, setVoteDown },
  reducer: voteUpDownReducer,
} = votingNumberUpDown;
