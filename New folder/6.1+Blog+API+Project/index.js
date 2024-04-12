import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "Embracing the Journey: My Pregnancy Experience",
    content:
      "As I sit down to write this blog post, I'm overwhelmed with gratitude and a touch of apprehension. You see, I'm on this magical journey called pregnancy, and oh, what a ride it has been! From the moment I saw those two pink lines on the pregnancy test, my world transformed in the most surreal way. Suddenly, I found myself navigating through a sea of emotions, from excitement to nervousness, from joy to anxiety. But amidst all these feelings, there's an undeniable sense of wonder and awe. My body, once just mine, is now home to a tiny miracle, growing and flourishing with each passing day. Feeling those first flutters of life within me was nothing short of pure magic. Of course, along with the wonders of pregnancy come the inevitable challenges. The morning sickness that lasted all day, the backaches that seem to have taken permanent residence, and let's not forget the constant battle with pregnancy brain! But you know what? Despite the discomforts and the uncertainties, I've come to realize that this journey is about so much more than just physical changes. It's about surrendering to the process, embracing the unknown, and trusting in the wisdom of my body. So here I am, embracing the stretch marks as badges of honor, cherishing every kick and wiggle, and counting down the days until I get to hold my little one in my arms. To all the fellow mamas-to-be out there, I want to remind you to cherish every moment of this beautiful journey. Embrace the changes, honor your body, and above all, trust in the magic of motherhood. With love and belly rubs.",
    author: "Ria",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Finding Balance: Navigating Pregnancy and Self-Care",
    content:
      "Hey there, fellow mamas-to-be! Can we talk about the importance of self-care during pregnancy? Because let me tell you, it's been quite the learning curve for me! From the moment I found out I was expecting, my focus shifted entirely to this little life growing inside me. And while that's undoubtedly a beautiful thing, I quickly realized that neglecting my own well-being wasn't doing anyone any favors. So I made a conscious decision to prioritize self-care, even when it felt like there simply weren't enough hours in the day. Whether it's taking a leisurely stroll in the park, indulging in a prenatal massage, or simply curling up with a good book, carving out time for myself has become non-negotiable. Of course, finding balance isn't always easy. There are days when the exhaustion kicks in, and all I want to do is collapse into bed. But I've come to understand that taking care of myself isn't selfish—it's necessary for the health and happiness of both me and my baby. So to all the mamas out there juggling pregnancy symptoms and everyday life, I want to remind you that it's okay to put yourself first sometimes. You deserve love, care, and compassion, just as much as anyone else. Here's to finding balance, embracing self-care, and nurturing our minds, bodies, and souls as we embark on this incredible journey of motherhood. Sending love and positive vibes your way.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "The Gift of Connection: Building a Support System During PregnancyThe Gift of Connection: Building a Support System During Pregnancy",
    content:
      "Hey beautiful mamas, Can we take a moment to talk about the power of connection during pregnancy? Because let me tell you, leaning on my support system has been an absolute game-changer for me. From the moment I announced my pregnancy, I've been surrounded by an outpouring of love and support from friends, family, and even strangers-turned-mama-friends. Whether it's a reassuring text message, a listening ear over a cup of tea, or a virtual hug from halfway across the world, knowing that I'm not alone on this journey has made all the difference. But building a support system isn't just about having someone to vent to when the pregnancy hormones kick in (although that's definitely a perk!). It's about finding a tribe that lifts you up, cheers you on, and celebrates every milestone, no matter how small. So to all the mamas out there feeling overwhelmed or isolated, I want to encourage you to reach out and lean on your support system. Whether it's joining a prenatal yoga class, attending a mommy-to-be meetup, or simply reaching out to a friend for a chat, know that you are never alone. Because together, we can navigate the ups and downs of pregnancy with grace, strength, and a whole lot of love. With gratitude and solidarity.",
    author: "Alice",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts DONE

app.get('/posts',(req,res)=>{
  res.json(posts)
})

//CHALLENGE 2: GET a specific post by id DONE

app.get('/posts/:id',(req,res)=>{
  const pid=req.params.id
  for(let i=0;i<posts.length;i++){
    if(posts[i].id==pid){
      res.json(posts[i])
    }
  }
})

//CHALLENGE 3: POST a new post DONE

app.post('/posts',(req,res)=>{
      const {title,content,author} = req.body
      let id=posts.length+1 
      const newPost = {
        id:id,
        title: title,
        content: content,
        author:author,
        date:new Date()
      };
      posts.push(newPost);
      res.json(newPost)
      
})

//CHALLENGE 4: PATCH a post when you just want to update one parameter DONE

app.patch("/posts/:id",(req,res)=>{
      const pid=req.params.id
      const {title,content,author} = req.body
      const postToUpdate = posts.find(post => post.id == pid);
      postToUpdate.title=title;
      postToUpdate.content=content;
      postToUpdate.author=author;
      res.json(postToUpdate)
})

//CHALLENGE 5: DELETE a specific post by providing the post id. DONE

app.delete('/posts/:id',(req,res)=>{
      const postId = req.params.id;
      const postToDel = posts.find(post => post.id == postId);
      if (!postToDel) {
        return res.status(404).json({ error: 'Joke not found' });
      }
      posts=posts.filter(post=> post!=postToDel)
      res.json(posts)
})

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
