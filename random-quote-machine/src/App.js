import React from 'react';
import ReactFCCtest from 'react-fcctest';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import Box from '@material-ui/core/Box'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const quotes =
  [
    {
      "text": "“Don't cry because it's over, smile because it happened.”",
      "author": "Dr. Seuss",
    },
    {
      "text": "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      "author": "Marilyn Monroe",
    },
    {
      "text": "“Be yourself; everyone else is already taken.”",
      "author": "Oscar Wilde",
    },
    {
      "text": "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      "author": "Albert Einstein",
    },
    {
      "text": "“So many books, so little time.”",
      "author": "Frank Zappa",
    },
    {
      "text": "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      "author": "Bernard M. Baruch",
    },
    {
      "text": "“A room without books is like a body without a soul.”",
      "author": "Marcus Tullius Cicero",
    },
    {
      "text":
        `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
      "author": "William W. Purkey",
    },
    {
      "text": "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
      "author": "Dr. Seuss",
    },
    {
      "text": "“You only live once, but if you do it right, once is enough.”",
      "author": "Mae West",
    },
    {
      "text": "“Be the change that you wish to see in the world.”",
      "author": "Mahatma Gandhi",
    },
    {
      "text": "“In three words I can sum up everything I've learned about life: it goes on.”",
      "author": "Robert Frost",
    },
    {
      "text": "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
      "author": "J.K. Rowling",
    },
    {
      "text": "“Don’t walk in front of me… I may not follow",
      "author": "Albert Camus",
    },
    {
      "text": "“No one can make you feel inferior without your consent.”",
      "author": "Eleanor Roosevelt",
    },
    {
      "text": "“Friendship ... is born at the moment when one man says to another ''What! You too? I thought that no one but myself . . .”",
      "author": "C.S. Lewis",
    },
    {
      "text": "“If you tell the truth, you don't have to remember anything.”",
      "author": "Mark Twain",
    },
    {
      "text": "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
      "author": "Maya Angelou",
    },
    {
      "text": "“A friend is someone who knows all about you and still loves you.”",
      "author": "Elbert Hubbard",
    },
    {
      "text": "“Always forgive your enemies; nothing annoys them so much.”",
      "author": "Oscar Wilde",
    },
    {
      "text": "“To live is the rarest thing in the world. Most people exist, that is all.”",
      "author": "Oscar Wilde",
    },
    {
      "text": "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
      "author": "Mahatma Gandhi",
    },
    {
      "text": "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
      "author": "Martin Luther King Jr.",
    },
    {
      "text": "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
      "author": "Oscar Wilde",
    },
    {
      "text": "“Without music, life would be a mistake.”",
      "author": "Friedrich Nietzsche",
    },
    {
      "text": "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
      "author": "Ralph Waldo Emerson",
    },
    {
      "text": "“We accept the love we think we deserve.”",
      "author": "Stephen Chbosky,",
    },
    {
      "text": "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”",
      "author": "Rob Siltanen",
    },
    {
      "text": "“Insanity is doing the same thing, over and over again, but expecting different results.”",
      "author": "Narcotics Anonymous",
    },
    {
      "text": "“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”",
      "author": "Marilyn Monroe",
    },
  ]

const useStyles = makeStyles({
  text: {
    paddingTop: 10,
    fontSize: 25,
  },
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
class App extends React.Component {

  constructor(props) {
    super(props)
    const i = getRandomInt(0, 29);
    this.state = {
      text: quotes[i].text,
      author: quotes[i].author
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const i = getRandomInt(0, 29);
    this.setState({
      text: quotes[i].text,
      author: quotes[i].author
    });
  }

  render() {

    return (
      <div>
        <ReactFCCtest />
        <SimpleCard
          text={this.state.text}
          author={this.state.author}
          onClick={this.onClick}
        />
      </div>
    );
  }

}

const SimpleCard = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Card id="quote-box" className={classes.card}>
        <CardContent>
          <Typography id="text" align="center" variant="body1" className={classes.text}>
            {props.text}
          </Typography>
          <Typography id="author" align="right">
            - {props.author}
          </Typography>
        </CardContent>
        <CardActions >
          <Box width="100%" display="flex" justifyContent="space-between">
            <Button
              id="tweet-quote"
              component="a"
              href="https://twitter.com/intent/tweet"
              variant="outlined"
            >
              <TwitterIcon />
            </Button>
            <Button
              id="new-quote"
              onClick={props.onClick}
              color="primary"
              variant="outlined"
            >
              New quote
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Container>
  );
}

export default App;
