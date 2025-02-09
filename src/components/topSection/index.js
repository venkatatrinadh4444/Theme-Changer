import { useContext } from "react";
import { StoreContext } from "../../App";
import "./index.css";

const data = {
  telugu:
    "ఈ రోజు వాతావరణం చాలా సున్నితంగా ఉంది. ఉష్ణోగ్రత 25 డిగ్రీల సెల్సియస్ కింద ఉంది, మరియు గాలులు తేలికగా వీచుతున్నాయి. ప్రకృతి అందంగా కనిపిస్తోంది, చెట్లు ఆకుపచ్చగా ఉన్నాయి మరియు పక్షులు గుంపులుగా ఎగురుతున్నాయి. ఈ రోజు ప్రతి ఒక్కరూ బయటకు వెళ్లి ప్రకృతి ఆనందాన్ని అనుభవించడానికి సరైన సమయం.",
  english:
    "Today, the weather is very pleasant. The temperature is below 25 degrees Celsius, and the winds are blowing gently. Nature looks beautiful, with trees being green and birds flying in flocks. It is the perfect time for everyone to go out and enjoy the beauty of nature.",
  tamil:
    "இன்று வானிலை மிகவும் இனிமையாக உள்ளது. வெப்பநிலை 25 டிகிரி செல்சியஸுக்கு கீழே உள்ளது, மற்றும் காற்று மெதுவாக வீசுகிறது. இயற்கை அழகாக தெரிகிறது, மரங்கள் பச்சையாக உள்ளன மற்றும் பறவைகள் கூட்டமாக பறக்கின்றன. இன்று அனைவரும் வெளியே சென்று இயற்கையின் அழகை அனுபவிக்க சரியான நேரம்.",
  hindi:
    "आज का मौसम बहुत सुहावना है। तापमान 25 डिग्री सेल्सियस से नीचे है, और हवा धीरे-धीरे बह रही है। प्रकृति सुंदर दिख रही है, पेड़ हरे-भरे हैं और पक्षी झुंड में उड़ रहे हैं। आज हर किसी के लिए बाहर जाकर प्रकृति की सुंदरता का आनंद लेने का सही समय है।",
};

const TopSection = () => {
  const { state } = useContext(StoreContext);
  const {mode}=state
  const topContent = stateValue => {
    switch (stateValue) {
      case "telugu":
        return data.telugu;
      case "english":
        return data.english;
      case "hindi":
        return data.hindi;
      case "tamil":
        return data.tamil;
      default:
        return;
    }
  };
  return (
    <div className="topSection">
      <div>
        <h1>Weather</h1>
        <p className="content">{topContent(mode)}</p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="weather"
          width="100%"
        />
      </div>
    </div>
  );
};
export default TopSection;
