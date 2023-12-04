import React from 'react';
import RosierSain from '../images/rosiersain.jpeg';
import RosierMalade from '../images/rosiermalade.jpeg';
import OrchidSain from '../images/orchidsain.jpeg';
import OrchidMalade from '../images/orchidmalade.jpeg';
import AloeVeraSain from '../images/aloeverasain.jpeg';
import AloeVeraMalade from '../images/aloeveramalade.jpeg';
import AshTreeSain from '../images/ashtreesain.jpeg';
import AshTreeMalade from '../images/ashtreemalade.jpeg';
import BambooSain from '../images/bamboosain.jpeg';
import BambooMalade from '../images/bamboomalade.jpeg';
import CactusSain from '../images/cactussain.jpeg';
import CactusMalade from '../images/cactusmalade.jpeg';
import SunFlowersSain from '../images/sunflowerssain.jpeg';
import SunFlowersMalade from '../images/sunflowersmalade.jpeg';
import FersSain from '../images/fernssain.jpeg';
import FersMalade from '../images/fernsmalade.jpeg';
import TulipomaniaSain from '../images/tulipomaniasain.jpeg';
import TulipomaniaMalade from '../images/Tulipomaniamalade.jpeg';
import BonsaiSain from '../images/bonsaisain.jpeg';
import Bonsai from '../images/bonsaimalade.jpeg';

// Assume 'blogs' is defined in the same file or imported from another module
const blogs = [
    {
      id: 1,
      title: 'Ash tree',
      content: 'Ash trees are deciduous trees that...',
      images: [AshTreeSain, AshTreeMalade],
      detailedContent: `
      <p>Ash trees are deciduous trees that belong to the genus <em>Fraxinus</em>...</p>
      <p>Key points about ash trees:</p>
      <h3>Identification:</h3>
      <p>Ash trees are recognized by their opposite branching pattern, meaning that leaves and buds are arranged in pairs on opposite sides of the stem. The compound leaves usually have 5 to 11 leaflets, depending on the species.</p>
      <h3>Species:</h3>
      <p>There are different species of ash trees, including White Ash (<em>Fraxinus americana</em>), Green Ash (<em>Fraxinus pennsylvanica</em>), Black Ash (<em>Fraxinus nigra</em>), and Blue Ash (<em>Fraxinus quadrangulata</em>).</p>
      <h3>Common Diseases:</h3>
      <ul>
        <li><strong>Emerald Ash Borer:</strong></li>
        <p>Symptoms: D-shaped exit holes, serpentine galleries under the bark.</p>
        <p>Prevention and Treatment: Insecticides, regular tree inspection.</p>
        <li><strong>Ash Anthracnose:</strong></li>
        <p>Symptoms: Irregularly shaped lesions on leaves, wilting.</p>
        <p>Prevention and Treatment: Fungicides, proper pruning for air circulation.</p>
        <li><strong>Ash Yellows:</strong></li>
        <p>Symptoms: Yellowing and wilting of leaves, stunted growth.</p>
        <p>Prevention and Treatment: Remove infected trees, insect control.</p>
      </ul>
      <h3>Caring for Ash Trees:</h3>
      <ul>
        <li><strong>Watering:</strong></li>
        <p>Keep the soil consistently moist, especially during dry periods.</p>
        <li><strong>Fertilization:</strong></li>
        <p>Fertilize in early spring with a balanced fertilizer.</p>
        <li><strong>Pruning:</strong></li>
        <p>Prune dead or diseased branches, and ensure proper air circulation.</p>
        <li><strong>Location:</strong></li>
        <p>Plant ash trees in well-drained soil and in areas with good sunlight exposure.</p>
        <li><strong>Monitoring:</strong></li>
        <p>Regularly inspect leaves and bark for signs of diseases or pests.</p>
      </ul>
      <p>By following these guidelines, you can promote the health and longevity of your ash trees in your landscape.</p>
     
      
      `,
    },
    {
      id: 2,
      title: 'Orchids',
      content: 'Orchids are stunning flowers that require special care...',
      images: [OrchidSain, OrchidMalade],
      detailedContent: `
    
  
  <p>Orchids are stunning flowers that require special care...</p>
  <p>Key care tips for orchids:</p>
  <ul>
    <li>Provide indirect light.</li>
    <li>Water sparingly.</li>
    <li>Use well-draining orchid mix.</li>
  </ul>
  <p>Common orchid diseases include:</p>
  <ul>
    <li>1. Root Rot:</li>
    <p>Root rot is a common issue in orchids, especially when overwatered. To prevent root rot:</p>
    <ul>
      <li>Avoid overwatering; let the top layer of the orchid mix dry before watering again.</li>
      <li>Ensure proper drainage in the orchid pot.</li>
    </ul>
    <li>2. Leaf Spot:</li>
    <p>Leaf spot is characterized by dark spots on the leaves. Control leaf spot by:</p>
    <ul>
      <li>Avoiding overhead watering to keep the leaves dry.</li>
      <li>Using fungicidal sprays if needed.</li>
    </ul>
    <li>3. Scale Insects:</li>
    <p>Scale insects can infest orchids. Deal with scale insects by:</p>
    <ul>
      <li>Inspecting orchids regularly for signs of infestation.</li>
      <li>Removing scales with a soft brush or cotton swab dipped in rubbing alcohol.</li>
    </ul>
  </ul>
  <p>Remember to monitor your orchids regularly, and take prompt action if you notice any signs of diseases or pests. With proper care, your orchids will thrive and reward you with their beautiful blooms.</p>
  
      `,
    },
    {
      id: 3,
      title: 'Roses',
      content: 'Roses, with their magnificent flowers, are plants cherished in...',
      images: [RosierSain, RosierMalade],
      detailedContent: `
      <p>Roses, with their magnificent flowers, are plants cherished in many gardens...</p>
  <p>However, like any plant, they can be susceptible to certain diseases...</p>
  <h3>Powdery Mildew:</h3>
  <p>Symptoms: White powder on the leaves.</p>
  <p>Prevention and Treatment: Avoid dense planting to ensure good air circulation. Apply suitable fungicides.</p>
  <h3>Black Spot (Marsonia):</h3>
  <p>Symptoms: Black spots with a yellow outline on the leaves.</p>
  <p>Prevention and Treatment: Water at the base to avoid wetting the leaves. Use fungicides as needed.</p>
  <h3>Rust:</h3>
  <p>Symptoms: Orange pustules on the lower side of the leaves.</p>
  <p>Prevention and Treatment: Remove infected leaves. Use fungicides and ensure good air circulation.</p>
  <h3>Downy Mildew:</h3>
  <p>Symptoms: White/gray fuzz on the leaves.</p>
  <p>Prevention and Treatment: Water in the morning for quick drying. Use preventive fungicides.</p>
  <h3>General Tips for Caring for Roses:</h3>
  <ul>
    <li>Watering: Water regularly, preferably in the morning, avoiding wetting the leaves.</li>
    <li>Fertilization: Fertilize in spring and summer with balanced fertilizer.</li>
    <li>Pruning: Prune regularly to promote air circulation and healthy growth.</li>
    <li>Location: Plant roses in well-lit areas with well-drained soil.</li>
    <li>Monitoring: Regularly inspect leaves for early signs of diseases.</li>
  </ul>
  <p>By following these prevention tips and promptly addressing issues, you can enjoy beautiful, healthy roses in your garden.</p>
  
      `,
    },
    {
      id: 4,
      title: 'Cactus Varieties',
      content: 'Cactus Varieties are unique and fascinating plants known for...',
      images: [CactusSain, CactusMalade],
      detailedContent: `
      <p>Cactus Varieties are unique and fascinating plants known for their ability to thrive in arid environments...</p>
  <p>Key points about caring for cacti:</p>
  <ul>
    <li>Provide plenty of sunlight.</li>
    <li>Use well-draining soil.</li>
    <li>Water sparingly, allowing the soil to dry out between waterings.</li>
  </ul>
  <p>Common issues affecting cacti include:</p>
  <ul>
    <li>1. Overwatering:</li>
    <p>Overwatering is a common problem for cacti, leading to root rot. To prevent overwatering:</p>
    <ul>
      <li>Water cacti only when the top inch of the soil is dry.</li>
      <li>Ensure proper drainage in the pot.</li>
    </ul>
    <li>2. Sunburn:</li>
    <p>Excessive sun exposure can lead to sunburn on cacti. Protect cacti from intense midday sun, especially for newly planted ones.</p>
    <li>3. Pests:</li>
    <p>Common pests for cacti include spider mites and scale insects. Control pests by:</p>
    <ul>
      <li>Inspecting cacti regularly for signs of infestation.</li>
      <li>Removing pests manually or using insecticidal soap.</li>
    </ul>
  </ul>
  <p>Remember that cacti are adapted to survive in harsh conditions, and they generally require minimal care. Overly enthusiastic care, especially overwatering, is a common challenge. Keep these tips in mind to ensure your cacti thrive in their unique environment.</p>
  
      `,
    },
    {
      id: 5,
      title: 'Bamboo',
      content: 'Bamboo is a versatile and fast-growing plant that can add...',
      images: [BambooSain, BambooMalade],
      detailedContent: `
      <p>Bamboo is a versatile and fast-growing plant that can add beauty and functionality to your garden...</p>
  <p>Key points for incorporating bamboo into your garden:</p>
  <ul>
    <li>Choose the right bamboo variety for your climate and space.</li>
    <li>Plant bamboo in well-draining soil with good sunlight exposure.</li>
    <li>Provide adequate water during the establishment phase.</li>
  </ul>
  <p>Common considerations for growing bamboo:</p>
  <ul>
    <li>1. Containment:</li>
    <p>Bamboo has a spreading root system, and some varieties can be invasive. Consider using barriers or containment methods to control its spread.</p>
    <li>2. Pruning:</li>
    <p>Regular pruning helps maintain the desired shape and size of bamboo. Remove dead or weak canes to encourage new growth.</p>
  </ul>
  <p>Bamboo is susceptible to a few issues, including:</p>
  <ul>
    <li>1. Rhizome Spread:</li>
    <p>Monitor and control the spread of bamboo rhizomes to prevent overtake of garden space.</p>
    <li>2. Pests:</li>
    <p>Common pests for bamboo include aphids and mites. Keep an eye out for signs of infestation and treat accordingly.</p>
  </ul>
  <p>By understanding the needs and characteristics of bamboo, you can enjoy the beauty of this versatile plant in your garden. Whether used for privacy screens, ornamental features, or as a sustainable resource, bamboo can be a fantastic addition to your outdoor space.</p>
  
      `,
    },
    {
      id: 6,
      title: 'Tulipomania',
      content: 'Tulipomania refers to a period in the 17th century during which tulip bulbs became...',
      images: [TulipomaniaSain, TulipomaniaMalade],
      detailedContent: `
      <p>Tulipomania refers to a period in the 17th century during which tulip bulbs became the focus of speculative trading and reached extraordinarily high prices...</p>
  <p>Key points about Tulipomania:</p>
  <ul>
    <li>Origin:</li>
    <p>Tulips were introduced to Europe in the late 16th century and became highly sought after for their vibrant colors and unique patterns.</p>
    <li>Speculative Trading:</li>
    <p>As demand for rare tulip varieties grew, prices soared. At the peak of Tulipomania, tulip bulbs were traded for exorbitant sums, and a single bulb could cost more than a house.</p>
    <li>Crash:</li>
    <p>The tulip market eventually collapsed in 1637, leading to financial ruin for many involved in the speculative trade.</p>
  </ul>
  <p>Lessons from Tulipomania:</p>
  <ul>
    <li>1. Irrational Exuberance:</li>
    <p>Tulipomania serves as a historical example of speculative bubbles fueled by irrational exuberance and the influence of social factors on financial markets.</p>
    <li>2. Economic Impact:</li>
    <p>The crash of the tulip market had significant economic consequences, highlighting the risks associated with speculative trading.</p>
  </ul>
  <p>Today, Tulipomania is often referenced in discussions about financial markets and the psychology of investment. It remains a fascinating historical episode that provides insights into the dynamics of markets and human behavior.</p>
  
      `,
    },
  
    {
      id: 7,
      title: 'Sunflowers',
      content: 'Sunflowers, with their vibrant yellow petals and distinctive appearance, have...',
      images: [SunFlowersSain, SunFlowersMalade],
      detailedContent: `
      <p>Sunflowers, with their vibrant yellow petals and distinctive appearance, have captivated people for centuries. Beyond their visual appeal, sunflowers hold deep symbolism and cultural significance...</p>
  <p>Key points about Sunflowers:</p>
  <ul>
    <li>Symbol of Sun and Happiness:</li>
    <p>Sunflowers are known for turning their faces towards the sun, a behavior known as heliotropism. This has led to their association with the sun and the concept of happiness.</p>
    <li>Cultural Symbolism:</li>
    <p>In various cultures, sunflowers symbolize adoration, loyalty, and longevity. They are often featured in art, literature, and folklore as positive symbols.</p>
    <li>Edible Seeds:</li>
    <p>Sunflower seeds, extracted from the flower's center, are not only a popular snack but also a nutritious source of essential nutrients like vitamins, minerals, and healthy fats.</p>
  </ul>
  <p>Sunflowers in Art and Literature:</p>
  <ul>
    <li>Van Gogh's Sunflowers:</li>
    <p>Vincent van Gogh's series of Sunflowers paintings are iconic representations of the flower in art. The vibrant colors and bold strokes contribute to their timeless appeal.</p>
    <li>Literary References:</li>
    <p>Sunflowers are often mentioned in literature, symbolizing positivity and the pursuit of light even in challenging circumstances.</p>
  </ul>
  <p>Planting and Growing Sunflowers:</p>
  <ul>
    <li>Planting Tips:</li>
    <p>Sunflowers thrive in well-drained soil and full sunlight. Planting in the spring and providing adequate water helps promote healthy growth.</p>
    <li>Varieties:</li>
    <p>There are various sunflower varieties, ranging in size and color. Some are cultivated for ornamental purposes, while others are grown for their seeds.</p>
  </ul>
  <p>Whether gracing gardens, fields, or art, sunflowers continue to brighten the world and serve as a reminder of the beauty that nature offers.</p>
  
      
      `,
    },
    {
      id: 8,
      title: 'Bonsai',
      content: 'Bonsai, the art of cultivating miniature trees, is a centuries-old practice that...',
      images: [BonsaiSain, BambooMalade],
      detailedContent: `
      <p>Bonsai, the art of cultivating miniature trees, is a centuries-old practice that originated in China and was later refined in Japan. Growing and shaping a bonsai tree is a rewarding and meditative hobby, but it requires patience and knowledge. Here are some basics for beginners:</p>
  
  <h3>Choosing the Right Bonsai Tree:</h3>
  <p>Consider the climate and light conditions in your area when selecting a bonsai tree. Common choices for beginners include ficus, juniper, and jade.</p>
  
  <h3>Potting and Soil:</h3>
  <p>Use well-draining soil to prevent waterlogged roots. Repot your bonsai every couple of years to refresh the soil and trim the roots.</p>
  
  <h3>Watering:</h3>
  <p>Keep the soil consistently moist but not waterlogged. Water when the topsoil feels slightly dry. Adjust the frequency based on the tree species and environmental conditions.</p>
  
  <h3>Pruning and Shaping:</h3>
  <p>Regularly prune your bonsai to maintain its shape and encourage branching. Wiring can be used to guide the branches into desired positions.</p>
  
  <h3>Light and Position:</h3>
  <p>Place your bonsai in a location that receives the appropriate amount of light for the specific tree species. Rotate the tree regularly to ensure even growth.</p>
  
  <h3>Fertilizing:</h3>
  <p>Fertilize your bonsai during the growing season with a balanced, water-soluble fertilizer. Follow the recommended dosage on the product.</p>
  
  <h3>Patience and Observation:</h3>
  <p>Bonsai is an art that requires patience. Observe your tree regularly, and don't rush the styling process. Enjoy the gradual transformation of your bonsai over time.</p>
  
  <h3>Common Issues:</h3>
  <p>Watch for signs of pests, diseases, or stress. Address issues promptly to maintain the health of your bonsai.</p>
  
  <p>Remember, bonsai is both an art and a science. As you gain experience, you'll develop a deeper understanding of your tree's unique needs and characteristics. Joining a bonsai club or seeking guidance from experienced practitioners can also enhance your bonsai journey.</p>
  
      
      
      `,
    },
    {
      id: 9,
      title: 'Ferns',
      content: 'Ferns are versatile and elegant plants that add ...',
      images: [FersSain, FersMalade],
      detailedContent: `
      <p>Ferns are versatile and elegant plants that add a touch of lush greenery to shade gardens...</p>
  <p>Key points about ferns:</p>
  <ul>
    <li>Adaptability:</li>
    <p>Ferns thrive in shady and moist environments, making them ideal for gardens with limited sunlight.</p>
    <li>Fronds:</li>
    <p>The unique structure of ferns is characterized by delicate, feathery fronds that unfurl as they grow.</p>
    <li>Reproduction:</li>
    <p>Ferns reproduce via spores, a method that sets them apart from seed-producing plants. Spores are typically found on the undersides of fronds.</p>
  </ul>
  <p>Common fern varieties:</p>
  <ul>
    <li>1. Boston Fern:</li>
    <p>Known for its arching fronds and air-purifying qualities, the Boston Fern is a popular choice for both indoor and outdoor settings.</p>
    <li>2. Maidenhair Fern:</li>
    <p>This delicate fern is prized for its fine, lacy fronds. It adds a touch of elegance to shaded garden spots.</p>
    <li>3. Japanese Painted Fern:</li>
    <p>Featuring striking silver and burgundy hues, the Japanese Painted Fern is a visually appealing choice for shaded landscapes.</p>
  </ul>
  <p>Caring for ferns:</p>
  <ul>
    <li>1. Shade and Moisture:</li>
    <p>Plant ferns in areas with dappled or full shade, and ensure consistent moisture to mimic their natural habitat.</p>
    <li>2. Mulching:</li>
    <p>Apply a layer of organic mulch to help retain soil moisture and regulate temperature around ferns.</p>
    <li>3. Pruning:</li>
    <p>Remove dead fronds to encourage new growth and maintain the overall health and appearance of the fern.</p>
  </ul>
  <p>Whether used as ground cover or featured in containers, ferns contribute to the beauty and tranquility of shaded garden spaces. Their adaptability and unique aesthetics make them a delightful choice for plant enthusiasts.</p>
  
   
      `,
    },
    {
      id: 10,
      title: 'Aloe Vera',
      content: 'Aloe vera, known for its succulent leaves and various medicinal properties, is a popular plant...',
      images: [AloeVeraSain, AloeVeraMalade],
      detailedContent: `
      <p>Aloe vera, known for its succulent leaves and various medicinal properties, is a popular plant that has been used for centuries for its health and skincare benefits...</p>
  <p>Key Care Tips for Aloe Vera:</p>
  <ul>
    <li>1. Sunlight:</li>
    <p>Place your aloe vera plant in bright, indirect sunlight. A sunny window is ideal for its growth.</p>
    <li>2. Watering:</li>
    <p>Aloe vera is a drought-resistant plant. Allow the top inch of the soil to dry before watering, and avoid overwatering to prevent root rot.</p>
    <li>3. Soil:</li>
    <p>Use well-draining cactus or succulent soil mix for your aloe vera. Good drainage is essential for its health.</p>
  </ul>
  <p>Common Issues and Their Solutions:</p>
  <ul>
    <li>1. Root Rot:</li>
    <p>Overwatering can lead to root rot. Ensure proper drainage and let the soil dry out between waterings.</p>
    <li>2. Sunburn:</li>
    <p>If you're moving your aloe vera outdoors, acclimate it gradually to prevent sunburn. Provide partial shade initially.</p>
    <li>3. Pests:</li>
    <p>Watch out for common pests like mealybugs. Treat with insecticidal soap if necessary.</p>
  </ul>
  <p>Benefits of Aloe Vera:</p>
  <ul>
    <li>1. Skincare:</li>
    <p>Aloe vera gel is renowned for its soothing properties and is often used to relieve sunburn and skin irritations.</p>
    <li>2. Medicinal Uses:</li>
    <p>The gel from aloe vera leaves has various medicinal uses, including treating minor burns, cuts, and skin conditions.</p>
  </ul>
  <p>Remember to allow your aloe vera plant to thrive in well-maintained conditions, and you'll have a versatile and beneficial succulent in your home.</p>
  
    
      `,
    },
    // Add more blog entries
  ];
  export default blogs;