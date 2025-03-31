
export interface Story {
  id: string;
  title: string;
  description: string;
  content: string;
  audioUrl: string;
  coverImage: string;
  images: string[];
  youtubeId?: string;
  category: string;
  tags: string[];
  ageRange: string;
  readingTime: string;
  createdAt: string;
}

export const mockStories: Story[] = [
  {
    id: "the-magical-forest",
    title: "The Magical Forest",
    description: "Join Emma and her talking squirrel friend Nutty on an adventure through an enchanted forest filled with magical creatures.",
    content: `Once upon a time, there was a little girl named Emma who lived at the edge of a mysterious forest. Everyone in her village warned about entering the woods, saying strange things happened there.

One sunny morning, Emma was playing in her backyard when she spotted a squirrel with unusually bright eyes watching her. "Hello there," she said, not expecting an answer.

"Hello yourself," replied the squirrel, making Emma jump in surprise.

"You can talk!" she exclaimed.

The squirrel, who introduced himself as Nutty, explained that all animals in the forest could speak, but they only revealed this gift to special children. He invited Emma to journey into the forest to help solve a problem: the ancient tree of wishes was losing its magic.

Despite her fear, Emma's curiosity won out. She followed Nutty into the woods, where flowers glowed in rainbow colors and butterflies left sparkling trails as they flew. They met wise old owls, playful foxes, and even a grumpy old toad who guarded a bridge over a crystal-clear stream.

Together, they discovered that the tree needed children's laughter to maintain its magic. Emma spent the day playing with her new animal friends, and with each burst of laughter, the great tree glowed brighter.

As the sun began to set, Emma knew she had to return home. Nutty and the forest friends thanked her and gave her a special acorn necklace, promising she could return anytime.

From that day forward, Emma visited the magical forest often, bringing friends whose hearts were kind. And the Tree of Wishes thrived once more, granting wishes to those pure of heart.

The End.`,
    audioUrl: "https://example.com/stories/magical-forest.mp3",
    coverImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop"
    ],
    youtubeId: "dQw4w9WgXcQ",
    category: "Fantasy",
    tags: ["magic", "friendship", "forest", "animals"],
    ageRange: "4-8",
    readingTime: "7 min",
    createdAt: "2023-09-15"
  },
  {
    id: "brave-little-sailboat",
    title: "The Brave Little Sailboat",
    description: "A tale of courage as a small sailboat named Waverly faces the biggest storm of the season to save a stranded dolphin.",
    content: `In a small harbor where the water sparkled like diamonds under the sun, there lived a little sailboat named Waverly. Though she was smaller than the other boats, Waverly dreamed of grand adventures on the open sea.

The other boats would often tease her: "You're too small to handle big waves," they'd say. But Waverly didn't let their words sink her spirits.

One stormy afternoon, a fisherman rushed to the harbor with news that a young dolphin was trapped in a cove beyond the lighthouse, separated from its family by rough waters.

The larger boats looked at the dark clouds rolling in and refused to venture out. "It's too dangerous," they said. "We should wait until the storm passes."

But Waverly knew waiting might be too late for the dolphin. "I'll go," she announced, surprising everyone.

Despite warnings from the harbor master, Waverly set sail. The wind howled and the waves tossed her about, but she remembered what her maker had always told her: "It's not about your size, but the courage in your heart that carries you through storms."

Waverly battled through the fierce weather, finally reaching the cove where the frightened dolphin was circling. "Don't worry," she called out. "I'll help you find your family!"

The dolphin swam close to Waverly, and together they navigated back toward the open sea. The storm was still raging, but Waverly discovered that her small size actually helped her maneuver between the rocky outcrops that larger boats couldn't navigate.

After an hour that felt like forever, they spotted the dolphin family searching for their lost member. There was a joyful reunion as the young dolphin rejoined its pod. The dolphin's mother nudged Waverly gratefully before swimming away.

When Waverly returned to the harbor, all the boats whistled and bobbed in admiration. From that day on, no one ever called her "too small" again. Instead, they called her "Waverly the Brave" – the little sailboat with the biggest heart in the harbor.

The End.`,
    audioUrl: "https://example.com/stories/brave-sailboat.mp3",
    coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop"
    ],
    youtubeId: "9bZkp7q19f0",
    category: "Adventure",
    tags: ["ocean", "bravery", "helping others", "storms"],
    ageRange: "5-9",
    readingTime: "8 min",
    createdAt: "2023-10-10"
  },
  {
    id: "starlight-and-moonbeam",
    title: "Starlight and Moonbeam",
    description: "Two star sisters journey across the night sky to bring dreams to sleeping children and learn about the power of teamwork.",
    content: `High up in the night sky, beyond the clouds and airplanes, lived two star sisters named Starlight and Moonbeam. Starlight was bright and bold, twinkling with confidence. Moonbeam was gentle and thoughtful, glowing with a soft, soothing light.

Every night, the star sisters had an important job: delivering dreams to all the sleeping children on Earth. Starlight would craft exciting dreams of adventure – of pirates and treasure hunts, rocket ships and dinosaurs. Moonbeam created peaceful dreams – of floating on clouds, dancing with butterflies, and swimming with friendly fish.

One night, the Dream Collector (a kind, fluffy cloud with spectacles perched on his puffy front) announced a problem: "Children aren't sleeping well lately. Their dreams aren't reaching them properly."

The sisters were concerned. "We need to find out what's happening," said Starlight.

That night, they followed their dreams down to Earth and discovered a thick layer of worry-fog hanging over the towns and cities. The children's worries about school, friends, and scary stories they'd heard were creating a barrier that dreams couldn't easily pass through.

"My bright dreams can't get through this fog," said Starlight, trying to push her colorful dreams through the barrier.

"And my gentle dreams keep getting turned back," sighed Moonbeam.

After trying separately with no success, Moonbeam had an idea. "What if we combine our dreams? Your brightness with my calm?"

Together, they mixed their dreams, creating perfect balanced dreams – exciting but not scary, peaceful but not boring. When they sent these new dreams toward Earth, something magical happened. The combined dreams cut through the worry-fog like moonlight through mist.

That night, children everywhere smiled in their sleep. Some had dreams of riding gentle dragons across peaceful skies. Others dreamed of floating in bubbles to friendly planets.

The Dream Collector was delighted. "Together, you've created something more powerful than either of you could alone," he told the sisters.

From that night on, Starlight and Moonbeam always worked together, reminding children everywhere that even in the darkest nights, dreams could find their way through.

The End.`,
    audioUrl: "https://example.com/stories/starlight-moonbeam.mp3",
    coverImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop"
    ],
    youtubeId: "1xy6jpmgpqp",
    category: "Bedtime",
    tags: ["stars", "dreams", "teamwork", "night sky"],
    ageRange: "3-7",
    readingTime: "6 min",
    createdAt: "2023-11-05"
  },
  {
    id: "the-rainbow-garden",
    title: "The Rainbow Garden",
    description: "Lily discovers a magical garden where each color has a different emotion, teaching her how to understand and express her feelings.",
    content: `Lily was a quiet little girl who found it hard to talk about her feelings. Sometimes she felt so many emotions all jumbled up inside that she didn't know which ones to say out loud.

One rainy morning, after a big storm, Lily noticed something unusual at the bottom of her grandma's garden – a tiny rainbow that seemed to touch the ground behind the old oak tree. Curious, she followed it.

Behind the tree was a gate she'd never seen before, covered in climbing roses of every color. The rainbow seemed to lead right through it. Lily pushed open the gate and gasped.

Inside was the most beautiful garden she'd ever seen, but what made it truly special was that it was divided into distinct colorful sections – red, orange, yellow, green, blue, purple, and pink.

As Lily stepped into the red section, she suddenly felt brave and full of energy. When she moved to the orange area, she felt creative and playful. In the yellow garden, happiness bubbled up inside her like sunshine.

A small, kind voice spoke: "Welcome to the Rainbow Garden." Lily turned to see a tiny gardener with white hair and twinkling eyes.

"What is this place?" Lily asked.

"This is where feelings grow," the gardener explained. "Each color helps us understand a different emotion."

The gardener showed Lily around the entire garden. The green section made her feel peaceful and hopeful. The blue area brought calmness but also, surprisingly, some sadness. In the purple garden, she felt proud and strong, while the pink garden filled her with love and kindness.

"Some days we need more of one color than others," the gardener explained. "And that's perfectly okay."

Lily visited the Rainbow Garden whenever she felt confused about her emotions. She learned that all feelings are important – even the difficult ones in the blue garden that sometimes made her cry.

One day, when her best friend was upset about moving away, Lily knew just what to do. She brought her friend to the Rainbow Garden, where they spent time in the blue section feeling sad together, then visited the green garden to find hope for new beginnings.

Lily never found it difficult to express her feelings again. Even when she grew too old to see the magical rainbow gate, she carried the garden's wisdom in her heart, remembering that every emotion has its own special color and purpose.

The End.`,
    audioUrl: "https://example.com/stories/rainbow-garden.mp3",
    coverImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop"
    ],
    youtubeId: "xyqqwertyz12",
    category: "Educational",
    tags: ["emotions", "colors", "gardens", "feelings"],
    ageRange: "4-8",
    readingTime: "7 min",
    createdAt: "2023-12-01"
  },
  {
    id: "robot-and-butterfly",
    title: "The Robot and the Butterfly",
    description: "An unlikely friendship between a logical robot and a free-spirited butterfly teaches both about appreciating differences.",
    content: `In a junkyard at the edge of town lived a small robot named Pixel. Pixel had been programmed to sort and organize things, and he was very good at his job. Everything in his little corner of the junkyard was arranged by size, color, and function.

One spring morning, a colorful butterfly with iridescent blue wings landed on Pixel's antenna. Pixel had never seen anything like it.

"Greetings. Please state your function," Pixel said in his mechanical voice.

The butterfly fluttered around him. "I don't have a function. I just am!" she laughed. "I'm Azure."

Pixel was confused. "Everything must have a purpose. I organize things. What do you do?"

"I fly wherever the wind takes me. I drink nectar. I enjoy the sunshine. Come with me, and I'll show you!" offered Azure.

Pixel hesitated. He was not designed for adventure; he was designed for order. But something in his circuits hummed with curiosity. "I cannot leave my station," he replied.

"Just for one day," Azure insisted. "Everything will be here when you return."

Finally, Pixel agreed. Azure led him beyond the junkyard to a meadow bursting with wildflowers. Pixel tried to count and categorize the flowers, but there were too many, and they didn't stay still in the breeze.

"You don't need to organize everything," Azure explained. "Sometimes beauty exists in randomness."

Next, they visited a stream where water splashed chaotically over rocks. Pixel attempted to predict the water's path but couldn't. "It's inefficient," he noted.

"But it's wonderful," Azure countered. "Listen to the sound it makes."

Throughout the day, Pixel experienced things he couldn't categorize: the changing shapes of clouds, the unpredictable flight of birds, the way sunlight dappled through leaves.

By sunset, as they watched the sky turn from blue to orange to purple without any logical progression, Pixel made a discovery. "Beauty does not follow rules," he said. "I have been calculating when I should have been... experiencing."

When they returned to the junkyard, Pixel looked at his perfectly organized corner differently. He picked up a broken mirror and placed it where it would catch the morning sunlight and scatter rainbows. It served no practical purpose – and that, Pixel now understood, was perfectly okay.

From that day on, Pixel still organized things – it was his nature, after all – but he always left space for a little beautiful chaos. And Azure visited often, bringing new wonders for Pixel to experience rather than analyze.

The End.`,
    audioUrl: "https://example.com/stories/robot-butterfly.mp3",
    coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop"
    ],
    youtubeId: "abcdefgh123",
    category: "Friendship",
    tags: ["robots", "nature", "differences", "beauty"],
    ageRange: "6-10",
    readingTime: "8 min",
    createdAt: "2024-01-15"
  },
  {
    id: "talking-teddy",
    title: "The Talking Teddy",
    description: "When Oliver's teddy bear starts talking at midnight, they embark on a mission to bring dreams to children around the world.",
    content: `Oliver had owned his teddy bear, Mr. Buttons, for as long as he could remember. The brown bear with the black button eyes and the slightly lopsided smile had been his constant companion through chicken pox, first days of school, and thunderstorms.

So Oliver was quite surprised when, the night after his seventh birthday, Mr. Buttons sat up in bed and said, "Well, I think you're old enough to know the truth now."

Oliver nearly fell out of bed. "You can talk!" he exclaimed, then quickly covered his mouth, remembering his parents were asleep down the hall.

"Only at midnight," Mr. Buttons explained, his button eyes somehow twinkling, "and only to children who truly believe in magic. Do you?"

Oliver nodded, too astonished to speak.

"Excellent," said Mr. Buttons, straightening his worn bowtie. "Because I need your help. You see, I'm not just a teddy bear. I'm a Dream Guardian."

Mr. Buttons explained that teddy bears around the world protected children's dreams while they slept. But lately, many children had stopped keeping teddies, and nightmares were sneaking into more and more dreams.

"Tonight is the Night of Thousand Stars," Mr. Buttons continued, "when Dream Guardians are at their most powerful. Will you come with me to the Dream Realm to help restore the balance?"

Oliver didn't hesitate. "Yes!"

Mr. Buttons took Oliver's hand, and together they stepped through a glowing doorway that hadn't been there a moment before. They emerged in a strange landscape where clouds formed pathways between islands floating in a twilight sky. On each island was a sleeping child with their teddy bear standing guard.

Mr. Buttons led Oliver to a central island with a massive dream catcher. "This catches good dreams and sends them out to children," he explained, "but it's getting weaker. It needs the touch of a true believer."

When Oliver placed his hand on the dream catcher, it began to glow with golden light. Streams of beautiful dreams – of flight and adventure, of kindness and courage – flowed outward to the sleeping children.

By the time they returned to Oliver's bedroom, dawn was approaching. "Will I remember this tomorrow?" Oliver asked sleepily.

"Perhaps as a dream," Mr. Buttons said, settling back into his regular teddy position. "But the magic will always be there, even if you can't see it."

From that night on, Oliver made sure that Mr. Buttons was always by his side at bedtime. And though the teddy never spoke again outside the Dream Realm, Oliver would sometimes wake to find his bowtie slightly askew – a small reminder of their midnight adventures together.

The End.`,
    audioUrl: "https://example.com/stories/talking-teddy.mp3",
    coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop"
    ],
    youtubeId: "teddybear456",
    category: "Fantasy",
    tags: ["toys", "dreams", "adventure", "magic"],
    ageRange: "5-8",
    readingTime: "8 min",
    createdAt: "2024-02-10"
  }
];
