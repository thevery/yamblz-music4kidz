import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CARDS from '_data/cardsType';
import { getFeed } from '_actions/feed';

import SingleCard from '_components/cards/SingleCard';
import RadioCard from '_components/cards/RadioCard';
import CollectionCard from '_components/cards/CollectionCard';
import CartoonCard from '_components/cards/CartoonCard/index';
import GameCard from '_components/cards/GameCard/index';

class CardList extends Component {
  componentWillMount() {
    const { userId } = this.props;

    if (userId !== undefined) {
      this.props.getFeed(userId);
    }
  }

  renderCard = (data) => {
    const cards = {
      [CARDS.radio]: RadioCard,
      [CARDS.soundtrack]: CartoonCard,
      [CARDS.single]: SingleCard,
      [CARDS.collection]: CollectionCard,
      [CARDS.game]: GameCard,
    };

    const CardsType = cards[data.type];

    const { callbacks, backgroundsList } = this.props;

    return (
      <CardsType
        key={data.id}
        data={data}
        callbacks={callbacks}
        bgs={backgroundsList}
      />
    );
  };

  render() {
    const { data } = this.props.feed;

    return (
      <div>
        { data && data.map((card) => this.renderCard(card)) }
      </div>
    );
  }
}

export default connect((state, props) => ({
  ...props,
  feed: state.feed,
  userId: state.user.data.id === undefined ? 1 : state.user.data.id,
  backgroundsList: state.dictionaries.backgroundsList,
}), { getFeed })(CardList);

CardList.propTypes = {
  callbacks: PropTypes.object,
  feed: PropTypes.object,
  userId: PropTypes.number,
  getFeed: PropTypes.func,
  backgroundsList: PropTypes.object,
};
