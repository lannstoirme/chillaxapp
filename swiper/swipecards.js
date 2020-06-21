'use strict';

import React, { AppRegistry, StyleSheet, Text, View, Animated, Component, PanResponder, Image, TouchableHighlight} from 'react-native';
import clamp from 'clamp';
import Dimensions from 'Dimensions';

const Persons = [
        {
          "name": "Going to a quiz or trivia night",
          "image": "https://www.jerseysbest.com/wp-content/uploads/2019/02/GettyImages-871518740-768x530.jpg"
        },
        {
          "name": "Spending time in nature",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fyouhaveacalling.com%2Fpositivity%2Fthe-11-habits-of-happy-people&psig=AOvVaw31lpE5HWOtIve7-tREAfxQ&ust=1592793550666000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCwmsHwkeoCFQAAAAAdAAAAABAN"
        },
        {
          "name": "Debating",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2Fwixbom_group-of-people-png-group-of-happy-people%2F&psig=AOvVaw31lpE5HWOtIve7-tREAfxQ&ust=1592793550666000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCwmsHwkeoCFQAAAAAdAAAAABAT"
        },
        {
          "name": "Painting my nails",
          "image": "https://thedolcediet.com/wp-content/uploads/2016/05/happy-people.jpg"
        },
        {
          "name": "Going Ice Skating",
          "image": "https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533__340.jpg"
        },
        {
          "name": "Roller Blading",
          "image": "https://cdn.pixabay.com/photo/2014/12/16/22/25/youth-570881__340.jpg"
        },
        {
          "name": "Scheduling a day with nothing to do",
          "image": "https://pixabay.com/photos/men-women-apparel-couple-people-2425121/"
        },
        {
          "name": "Giving positive feedback about something",
          "image": "https://pixabay.com/photos/couple-african-happy-man-woman-1030744/"
        },
        {
          "name": "Feeding the birds",
          "image": "https://cdn.pixabay.com/photo/2015/07/13/11/56/girl-843076__340.jpg"
        },
        {
          "name": "Spending an evening with good friends",
          "image": "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__340.jpg"
        },
        {
          "name": "Making jam or preserves",
          "image": "https://pixabay.com/photos/woman-long-hair-people-female-girl-2593366/"
        },
        {
          "name": "Going out to dinner",
          "image": "https://pixabay.com/photos/concert-confetti-party-event-club-2527495/"
        },
        {
          "name": "Buying gifts",
          "image": "https://pixabay.com/photos/child-running-children-girl-happy-817371/"
        },
        {
          "name": "Having a political discussion",
          "image": "https://cdn.pixabay.com/photo/2015/10/12/15/05/girl-984155_960_720.jpg"
        },
        {
          "name": "Repairing things around the house",
          "image": "https://pixabay.com/photos/hip-hop-dancer-silhouette-man-male-1209499/"
        },
        {
          "name": "Washing my car",
          "image": "https://cdn.pixabay.com/photo/2016/03/23/08/34/beautiful-1274361__340.jpg"
        },
        {
          "name": "Watching TV, videos",
          "image": "https://pixabay.com/illustrations/person-human-joy-sunset-sun-110305/"
        },
        {
          "name": "Sending a loved one a card in the mail",
          "image": "https://pixabay.com/photos/girl-lying-relax-young-white-cute-511883/"
        },
        {
          "name": "Baking something to share with others",
          "image": "https://pixabay.com/photos/boy-person-afghanistan-people-60659/"
        },
        {
          "name": "Hosting a potluck",
          "image": "https://pixabay.com/photos/children-siblings-brother-sister-920236/"
        },
        {
          "name": "Having a barbecue",
          "image": "https://pixabay.com/photos/grimace-funny-expression-mask-388987/"
        },
        {
          "name": "Having a games and cards night",
          "image": "https://pixabay.com/photos/people-man-woman-couple-happy-2589047/"
        },
        {
          "name": "Taking a sauna or steam bath",
          "image": "https://pixabay.com/photos/people-children-child-happy-1560569/"
        },
        {
          "name": "Having a video call",
          "image": "https://pixabay.com/photos/woman-girl-model-portrait-happy-5216414/"
        },
        {
          "name": "Organising my wardrobe",
          "image": "https://pixabay.com/photos/water-beach-sea-summer-ocean-3266211/"
        },
        {
          "name": "Playing musical instruments",
          "image": "https://cdn.pixabay.com/photo/2015/02/17/22/09/youth-640094_960_720.jpg"
        },
        {
          "name": "Going to the ballet or opera",
          "image": "https://pixabay.com/photos/couple-happy-laughing-lovers-man-1838940/"
        },
        {
          "name": "Lighting scented candles, oil or incense",
          "image": "https://pixabay.com/photos/people-jumping-happiness-happy-fun-821624/"
        },
        {
          "name": "Spending time alone",
          "image": "https://pixabay.com/photos/sunglasses-people-water-blue-1284419/"
        },
        {
          "name": "Exercising",
          "image": "https://cdn.pixabay.com/photo/2017/08/10/19/25/girl-2626753__340.jpg"
        },
        {
          "name": "Putting up a framed picture or artwork",
          "image": "https://pixabay.com/photos/senior-couple-couple-in-bed-4723737/"
        },
        {
          "name": "Flirting",
          "image": "https://pixabay.com/photos/couple-love-together-woman-young-498484/"
        },
        {
          "name": "Riding a motorbike",
          "image": "https://pixabay.com/photos/woman-lovely-young-girl-people-3187620/"
        },
        {
          "name": "Cycling",
          "image": "https://pixabay.com/photos/mother-daughter-family-park-child-1171569/"
        },
        {
          "name": "Wine tasting",
          "image": "https://pixabay.com/photos/surfing-girl-female-surfer-1210040/"
        },
        {
          "name": "Going to a planetarium or observatory",
          "image": "https://pixabay.com/photos/couple-women-relationship-twins-1733991/"
        },
        {
          "name": "Birdwatching",
          "image": "https://pixabay.com/photos/persons-couple-people-man-woman-768683/"
        },
        {
          "name": "Doing something spontaneously",
          "image": "https://pixabay.com/photos/jump-sky-hooray-man-cloud-blue-2731641/"
        },
        {
          "name": "Massaging hand cream into my hands",
          "image": "https://pixabay.com/photos/asia-buffalo-cambodia-cambodians-1807504/"
        },
        {
          "name": "Fantasising about the future",
          "image": "https://pixabay.com/photos/child-girl-young-people-female-476506/"
        },
        {
          "name": "Laughing",
          "image": "https://pixabay.com/photos/young-girl-lying-relax-white-cute-510441/"
        },
        {
          "name": "Flying a plane",
          "image": "https://pixabay.com/photos/love-couple-happy-hug-young-1716825/"
        },
        {
          "name": "Playing tennis or badminton",
          "image": "https://pixabay.com/photos/party-people-girl-club-festival-1284304/"
        },
        {
          "name": "Making origami",
          "image": "https://pixabay.com/photos/kids-children-face-smile-childhood-2408614/"
        },
        {
          "name": "Playing lawn games (bocce or bowls)",
          "image": "https://pixabay.com/photos/kids-woman-little-girl-cute-1387118/"
        },
        {
          "name": "Going to a party",
          "image": "https://pixabay.com/photos/adult-couple-woman-man-fun-3086304/"
        },
        {
          "name": "Seeing or showing photos",
          "image": "https://pixabay.com/photos/beautiful-flower-bride-white-dress-3062365/"
        },
        {
          "name": "Going on a city tour",
          "image": "https://pixabay.com/photos/waterfall-indonesia-malang-java-4297449/"
        },
        {
          "name": "Going to an agricultural show",
          "image": "https://pixabay.com/photos/people-talking-father-mr-man-1876726/"
        },
        {
          "name": "Jogging, walking",
          "image": "https://pixabay.com/photos/kid-child-people-happy-girl-2679111/"
        },
        {
          "name": "Going to open homes",
          "image": "https://pixabay.com/photos/father-son-family-boy-people-2212101/"
        },
        {
          "name": "Researching a topic of interest",
          "image": "https://pixabay.com/photos/fashion-happy-men-people-smile-1835901/"
        },
        {
          "name": "Fishing",
          "image": "https://pixabay.com/photos/people-portrait-adult-elderly-woman-3190181/"
        },
        {
          "name": "Going to the beach",
          "image": "https://pixabay.com/photos/girl-child-smile-female-happy-3973375/"
        },
        {
          "name": "Redecorating",
          "image": "https://pixabay.com/photos/brothers-boys-brother-children-4894710/"
        },
        {
          "name": "Volunteering for a cause I support",
          "image": "https://pixabay.com/photos/family-baby-mom-babe-people-young-4962871/"
        },
        {
          "name": "Smelling a flower",
          "image": "https://pixabay.com/photos/nature-kid-kids-children-happy-4469399/"
        },
        {
          "name": "Hiking",
          "image": "https://pixabay.com/photos/redhead-smile-girl-people-woman-4789668/"
        },
        {
          "name": "Opening the curtains to let the sunlight in",
          "image": "https://pixabay.com/photos/young-girl-female-happy-summer-3973379/"
        },
        {
          "name": "Going to the zoo",
          "image": "https://pixabay.com/photos/happy-woman-female-holidays-4333439/"
        },
        {
          "name": "Going to the aquarium",
          "image": "https://pixabay.com/photos/landscape-casal-grooms-marriage-4766291/"
        },
        {
          "name": "Doing jigsaw puzzles",
          "image": "https://pixabay.com/photos/couple-clouds-relationship-alps-4495742/"
        },
        {
          "name": "Playing video games",
          "image": "https://pixabay.com/photos/starfish-woman-lady-person-people-3656896/"
        },
        {
          "name": "Donating old clothes to charity",
          "image": "https://pixabay.com/photos/girl-smile-woman-portrait-person-4595719/"
        },
        {
          "name": "Learning a magic trick",
          "image": "https://pixabay.com/photos/face-portrait-black-woman-makeup-5084530/"
        },
        {
          "name": "Lying in the sun briefly",
          "image": "https://pixabay.com/photos/smile-color-laugh-black-1485850/"
        },
        {
          "name": "Talking on the phone",
          "image": "https://pixabay.com/photos/children-river-birds-splash-water-1822662/"
        },
        {
          "name": "Listening to a podcast or radio show",
          "image": "https://pixabay.com/illustrations/smile-happy-people-fun-young-2072908/"
        },
        {
          "name": "Watching YouTube",
          "image": "https://pixabay.com/photos/baby-boy-caucasian-child-family-164897/"
        },
        {
          "name": "Walking around my city",
          "image": "https://pixabay.com/photos/baby-child-daughter-family-girl-17369/"
        },
        {
          "name": "Looking at architecture",
          "image": "https://pixabay.com/photos/children-laugh-laptop-vietnamese-1822471/"
        },
        {
          "name": "Doing arts and crafts",
          "image": "https://pixabay.com/photos/wall-brick-grafitti-window-love-2794567/"
        },
        {
          "name": "Sewing",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fgay_couple.html&psig=AOvVaw1s_AFH_KOyXY1wfiZ08Z7I&ust=1592794699420000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjOkuT0keoCFQAAAAAdAAAAABAD"
        },
        {
          "name": "Mowing the lawn",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonobology.com%2F8-things-that-straight-and-gay-couples-do-differently%2F&psig=AOvVaw1s_AFH_KOyXY1wfiZ08Z7I&ust=1592794699420000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjOkuT0keoCFQAAAAAdAAAAABAO"
        },
        {
          "name": "Restoring furniture",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.queerty.com%2Fstudy-gay-couples-vastly-happier-heterosexual-couples-20171215&psig=AOvVaw1s_AFH_KOyXY1wfiZ08Z7I&ust=1592794699420000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjOkuT0keoCFQAAAAAdAAAAABAU"
        },
        {
          "name": "Doing horseback riding",
          "image": "https://pixabay.com/photos/girl-lying-young-room-white-cute-511880/"
        },
        {
          "name": "Mountain bike riding",
          "image": "https://pixabay.com/photos/people-girls-women-friends-smile-2596150/"
        },
        {
          "name": "Going kayaking",
          "image": "https://pixabay.com/photos/people-kid-boy-child-smile-happy-2597252/"
        },
        {
          "name": "Doing the dishes",
          "image": "https://pixabay.com/photos/happy-fun-spring-spring-background-2220481/"
        },
        {
          "name": "Sitting outside and listening to the birds",
          "image": "https://pixabay.com/photos/model-smile-fashion-male-happy-2436214/"
        },
        {
          "name": "Sitting around a campfire",
          "image": "https://pixabay.com/photos/flower-orange-petal-bloom-garden-2587531/"
        },
        {
          "name": "Travelling to national parks",
          "image": "https://pixabay.com/photos/baby-caucasian-child-daughter-17342/"
        },
        {
          "name": "Going to a fair",
          "image": "https://pixabay.com/photos/mother-child-family-happy-love-1039765/"
        },
        {
          "name": "Playing cards",
          "image": "https://pixabay.com/photos/couple-couples-people-romantic-2308244/"
        },
        {
          "name": "Putting moisturising cream on my face",
          "image": "https://pixabay.com/photos/girls-colorful-smile-funny-438152/"
        },
        {
          "name": "Volunteering at an animal shelter",
          "image": "https://pixabay.com/photos/beach-young-girl-woman-woman-beach-1368021/"
        },
        {
          "name": "Riding a scooter",
          "image": "https://pixabay.com/photos/girl-happiness-happy-joy-2252145/"
        },
        {
          "name": "Going for drinks with friends",
          "image": "https://pixabay.com/photos/people-man-guy-smile-happy-2564463/"
        },
        {
          "name": "Going to a meetup",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.westword.com%2Farts%2Fmeet-2017s-thirteen-freshest-faces-of-denver-drag-8727692&psig=AOvVaw3G3Z6SU1_tyyMgQZBckHPL&ust=1592794891382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODnrcP1keoCFQAAAAAdAAAAABAP"
        },
        {
          "name": "Gardening",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F340655159311283534%2F&psig=AOvVaw3G3Z6SU1_tyyMgQZBckHPL&ust=1592794891382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODnrcP1keoCFQAAAAAdAAAAABAV"
        },
        {
          "name": "Growing vegetables",
          "image": "https://pixabay.com/photos/redhead-beautiful-girl-hair-2012295/"
        },
        {
          "name": "Entering a competition",
          "image": "https://cdn.pixabay.com/photo/2017/08/06/23/19/people-2597435_960_720.jpg"
        },
        {
          "name": "Doing crossword puzzles",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fyaqeeninstitute.org%2Fnazir-khan%2Fwomen-in-islamic-law-examining-five-prevalent-myths%2F&psig=AOvVaw11iPmpybQkxMakvWFT3IGv&ust=1592795011800000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNC3-Pr1keoCFQAAAAAdAAAAABAP"
        },
        {
          "name": "Playing with my pet",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F293508100709860398%2F&psig=AOvVaw11iPmpybQkxMakvWFT3IGv&ust=1592795011800000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNC3-Pr1keoCFQAAAAAdAAAAABAV"
        },
        {
          "name": "Soaking in the bath",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cdc.gov%2Fcancer%2Fuscs%2Fabout%2Fdata-briefs%2Fno6-hpv-assoc-cancers-AIAN-UnitedStates-1999-2015.htm&psig=AOvVaw1RfyBZa6eLG60-duXrXiQT&ust=1592795073954000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCygZ32keoCFQAAAAAdAAAAABAD"
        },
        {
          "name": "Cooking a special meal",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnextshark.com%2Fkate-stoltz%2F&psig=AOvVaw0aLqROiVdDJiOo_KH2KDOL&ust=1592795114258000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCh5an2keoCFQAAAAAdAAAAABAD"
        },
        {
          "name": "Having a dayspa treatment",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F314126142729065959%2F&psig=AOvVaw2b8VnAtZfdKB3n3y90gHcA&ust=1592795134136000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDTw7T2keoCFQAAAAAdAAAAABAD"
        },
        {
          "name": "Putting extra effort into my appearance",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Falisong2%2F4821816729&psig=AOvVaw2b8VnAtZfdKB3n3y90gHcA&ust=1592795134136000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDTw7T2keoCFQAAAAAdAAAAABAJ"
        },
        {
          "name": "Getting a makeover",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.buzzfeed.com%2Fbadge%2Fgoth&psig=AOvVaw2b8VnAtZfdKB3n3y90gHcA&ust=1592795134136000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDTw7T2keoCFQAAAAAdAAAAABAP"
        },
        {
          "name": "Playing golf",
          "image": "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwhatever.scalzi.com%2F2011%2F10%2F26%2Fshiny-happy-goth-gen-xers-holding-hands%2F&psig=AOvVaw2b8VnAtZfdKB3n3y90gHcA&ust=1592795134136000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDTw7T2keoCFQAAAAAdAAAAABAV"
        },
        {
          "name": "Doing a random act of kindness",
          "image": "https://pixabay.com/photos/mother-daughter-laughing-family-937038/"
        },
        {
          "name": "Build a bird house",
          "image": "https://pixabay.com/photos/beautiful-face-female-girl-happy-18279/"
        },
        {
          "name": "Have a family get-together",
          "image": "https://pixabay.com/photos/boys-portrait-brothers-people-554644/"
        },
        {
          "name": "Listening to music",
          "image": "https://pixabay.com/photos/mother-daughter-woman-girl-friend-1599653/"
        },
        {
          "name": "Learning a new language",
          "image": "https://pixabay.com/photos/people-woman-happy-enjoy-smile-2575901/"
        },
        {
          "name": "Taking a free online class",
          "image": "https://pixabay.com/photos/model-businessman-corporate-2911363/"
        },
        {
          "name": "Working",
          "image": "https://pixabay.com/photos/cute-baby-girl-child-female-2220375/"
        },
        {
          "name": "Washing my hair",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thelist.com%2F64474%2Fways-tell-youre-really-happy%2F&psig=AOvVaw3SVaFrzrkr47MDojzh11NU&ust=1592796158966000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj79Jv6keoCFQAAAAAdAAAAABAD"
        },
        {
          "name": "Washing my car",
          "image": "https://unsplash.com/photos/FtZL0r4DZYk"
        },
        {
          "name": "Cleaning my house",
          "image": "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.purethoughts.net%2Fa-happy-person%2F&psig=AOvVaw3SVaFrzrkr47MDojzh11NU&ust=1592796158966000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj79Jv6keoCFQAAAAAdAAAAABAO"
        },
        {
          "name": "Singing",
          "image": "https://static01.nyt.com/images/2018/05/08/well/physed-happiness/physed-happiness-jumbo.jpg?quality=90&auto=webp"
        },
        {
          "name": "Going to a standup comedy night",
          "image": "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fwomensmedia%2Ffiles%2F2018%2F07%2FPhoto-happy-1-unsplash-michael-dam.jpg"
        }
]

// How far the swipe need to go for a yes/ no to fire
var SWIPE_THRESHOLD = 120;
// To get the stack effect the lower card must pick out at the bottom and appear smaller
var NEXT_CARD_POSITION_OFFSET = 4;
var NEXT_CARD_SIZE_OFFSET = 8;

class Card extends Component {
  render() {
    return (
      <View style={styles.cardResizeContainer}>
        <Animated.View style={[styles.cardContainer, this.props.animatedCardContainerStyles]}>
          <Animated.View style={[styles.card, this.props.animatedCardStyles]} {...this.props.panResponder}>
            <Image source={{uri: this.props.image}} style={styles.cardImage}>
              <Animated.View style={[styles.cardImageTextContainer, styles.cardImageYupContainer, this.props.animatedYupStyles]}>
                <Text style={[styles.cardImageText, styles.cardImageYupText]}>LOVE</Text>
              </Animated.View>
              <Animated.View style={[styles.cardImageTextContainer, styles.cardImageNopeContainer, this.props.animatedNopeStyles]}>
                <Text style={[styles.cardImageText, styles.cardImageNopeText]}>NEIN</Text>
              </Animated.View>
            </Image>
            <View style={styles.cardLabelContainer}>
              <Text style={styles.name}>{this.props.name}</Text>
              <Text style={styles.value}>100$</Text>
            </View>
          </Animated.View>   
        </Animated.View>
      </View>
    );
  }
}

class SwipeCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      cards: Persons,
      currentPosition: 0,
    }
  }

  // we use a circular queue
  _goToNextPerson() {
    let nextPosition = (this.state.currentPosition + 1) % this.state.cards.length
    this.setState({currentPosition: nextPosition});
  }

  componentDidMount() {
    this._animateEntrance();
  }

  _animateEntrance() {
    // Animated.timing(this.state.nextCardOpacity, {
    //          toValue: 1,
    //    }).start()
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        var velocity;

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
          Animated.decay(this.state.pan, {
            velocity: {x: velocity, y: vy},
            deceleration: 0.99
          }).start(this._resetState.bind(this))
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 4
          }).start()
        }
      }
    })
  }

  _resetState() {
    this.state.pan.setValue({x: 0, y: 0});
    this._goToNextPerson();
  }

  handleNopePress() {
      let screenwidth = Dimensions.get('window').width;
      let panlength = screenwidth + 100

      Animated.timing(this.state.pan, {
            toValue: {x: -panlength, y: 0}
      }).start(this._resetState.bind(this))
  }

  handleYupPress() {
      let screenwidth = Dimensions.get('window').width;
      let panlength = screenwidth + 100

      Animated.timing(this.state.pan, {
            toValue: {x: panlength, y: 0}
      }).start(this._resetState.bind(this))
  }

  render() {
    let { pan, cards, currentPosition} = this.state;

    let [translateX, translateY] = [pan.x, pan.y];

    // card 0 animation
    let rotate = pan.x.interpolate({inputRange: [-240, 0, 240], outputRange: ["-30deg", "0deg", "30deg"]});

    let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}]};

    let yupOpacity = pan.x.interpolate({inputRange: [0, SWIPE_THRESHOLD], outputRange: [0, 1], extrapolate: 'clamp'});
    let animatedYupStyles = {opacity: yupOpacity}

    let nopeOpacity = pan.x.interpolate({inputRange: [-SWIPE_THRESHOLD, 0], outputRange: [1, 0], extrapolate: 'clamp'});
    let animatedNopeStyles = {opacity: nopeOpacity}

    let card0AnimatedStyles = {
      animatedCardStyles: animatedCardStyles, 
      animatedNopeStyles: animatedNopeStyles,
      animatedYupStyles: animatedYupStyles
    }

    // card 1 animation
    let card1BottomTranslation = pan.x.interpolate({inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD], outputRange: [0, -NEXT_CARD_POSITION_OFFSET, 0], extrapolate: 'clamp'});
    let card1SideTranslation = pan.x.interpolate({inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD], outputRange: [0, NEXT_CARD_SIZE_OFFSET, 0], extrapolate: 'clamp'});
    let card1TopTranslation = pan.x.interpolate({inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD], outputRange: [0, NEXT_CARD_POSITION_OFFSET+NEXT_CARD_SIZE_OFFSET, 0], extrapolate: 'clamp'});
    let card1TranslationStyles = {top: card1TopTranslation, bottom: card1BottomTranslation, right: card1SideTranslation, left: card1SideTranslation}
    let card1AnimatedStyles = {
      animatedCardContainerStyles: card1TranslationStyles
    }

    // card 2 animation
    let card2BottomTranslation = pan.x.interpolate({inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD], outputRange: [-NEXT_CARD_POSITION_OFFSET, -NEXT_CARD_POSITION_OFFSET*2, -NEXT_CARD_POSITION_OFFSET], extrapolate: 'clamp'});
    let card2SideTranslation = pan.x.interpolate({inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD], outputRange: [NEXT_CARD_SIZE_OFFSET, NEXT_CARD_SIZE_OFFSET*2, NEXT_CARD_SIZE_OFFSET], extrapolate: 'clamp'});
    let card2TopTranslation = pan.x.interpolate({inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD], outputRange: [NEXT_CARD_POSITION_OFFSET+NEXT_CARD_SIZE_OFFSET, (NEXT_CARD_POSITION_OFFSET+NEXT_CARD_SIZE_OFFSET)*2, NEXT_CARD_POSITION_OFFSET+NEXT_CARD_SIZE_OFFSET], extrapolate: 'clamp'});
    let card2TranslationStyles = {top: card2TopTranslation, bottom: card2BottomTranslation, right: card2SideTranslation, left: card2SideTranslation}
    let card2AnimatedStyles = {
      animatedCardContainerStyles: card2TranslationStyles
    }

    let card3AnimatedStyles = {
      animatedCardContainerStyles: {top: (NEXT_CARD_POSITION_OFFSET+NEXT_CARD_SIZE_OFFSET)*2, bottom: -NEXT_CARD_POSITION_OFFSET*2, right: NEXT_CARD_SIZE_OFFSET*2, left: NEXT_CARD_SIZE_OFFSET*2}
    }


    let person0 = cards[currentPosition]
    let person1 = cards[(currentPosition+1) % cards.length]
    let person2 = cards[(currentPosition+2) % cards.length]
    let person3 = cards[(currentPosition+3) % cards.length]

    // if the layout appears a little strange. it was born out of the trickiness in doing the following
    // at the same time ...

    // 1. the card should always appear on top when being dragged so needs to be rendered near the end 
    // (at least after the buttons)
    // 2. the layout should be responsive
    // 3. the buttons need to work ofc - we have to be careful about rendering a view on top of them

    // also note that we render 4 cards for the 'stack' effect. while dragging 3 cards appear under 
    // (but only 2 cards at pan=0)

    return (
      <View style={styles.bodyContainer}>
        <View style={styles.responsiveContainer}>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <TouchableHighlight style={[styles.button, styles.buttonNope]} underlayColor='#EEE' onPress={() => {this.handleNopePress()}}>
                  <Text style={styles.nopeText}>Nein!</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight style={[styles.button, styles.buttonYup]} underlayColor='#EEE' onPress={() => {this.handleYupPress()}}>
                  <Text style={styles.yupText}>Love!</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.cardsContainer}>
            <Card key={person3.name} {...person2} {...card3AnimatedStyles}/>
            <Card key={person2.name} {...person2} {...card2AnimatedStyles}/>
            <Card key={person1.name} {...person1} {...card1AnimatedStyles} />
            <Card key={person0.name} {...person0} {...card0AnimatedStyles} panResponder={this._panResponder.panHandlers}/>
          </View>

        </View>   
      </View>
    );
  }
}

var styles = StyleSheet.create({
  // main container
  bodyContainer: {
    flex: 1,
    //margin: 10,
    backgroundColor: '#F5FCFF',
  },

  // we keep the bottom button sections at height 100
  // the card expands to take up all the rest of the space
  responsiveContainer: {
    flex: 1,
    paddingBottom: 100,
  },

  // cards
  cardsContainer: {
    flex: 1,
  },

  cardResizeContainer: {
    flex: 1,
    position: 'absolute',
    top: 40,
    left: 40,
    bottom: 40, 
    right: 40,
  },

  cardContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0, 
    right: 0,
    justifyContent: 'flex-end',
  },

  card: {   
    position: 'relative',
    borderColor: '#AAA',
    borderWidth: 1,
    borderRadius: 8,  
    flex: 1,
    //overflow: 'hidden',
    shadowRadius: 2,
    shadowColor: '#BBB',
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 1,
      width: 0,
    }
  },

  cardImage: {
    flex: 1,
    borderRadius: 8,
  },

  cardImageTextContainer: {
    position: 'absolute',
    borderWidth: 3,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 4,
    opacity: 0,
  },
  cardImageYupContainer : {
    top: 40,
    left: 40,
    transform:[{rotate: '-20deg'}],
    borderColor: 'green',
    
  },
  cardImageNopeContainer : {
    top: 40,
    right: 40,
    transform:[{rotate: '20deg'}],
    borderColor: 'red',
  },
  cardImageText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  cardImageNopeText: {
    color: 'red',
    backgroundColor: 'rgba(0,0,0,0)', 
  },
  cardImageYupText: {
    color: 'green',
    backgroundColor: 'rgba(0,0,0,0)',
  },

  cardLabelContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    //borderColor: "#999",
    borderRadius: 8,
    //borderBottomWidth: 2,
    padding: 8,
  },
  name: {
    fontWeight: 'bold',
    color: '#999',
  },
  value: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#999',
  },
  
  // buttons

  buttonsContainer: {
    height:100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    padding: 8,
    borderRadius: 5,
  },
  buttonNope: {
    borderColor: 'red',
  },
  buttonYup: {
    borderColor: 'green',
  },
  yupText: {
    fontSize: 20,
    color: 'green',
  },
  nopeText: {
    fontSize: 20,
    color: 'red',
  },

});


module.exports = SwipeCards