import { useContext } from "react";
import { StoreContext } from "../../App";
import "./index.css";

const data = {
  telugu: {
    content1:
      "తెలుగు భాష దక్షిణ భారతదేశంలోని ముఖ్యమైన భాషలలో ఒకటి. ఇది దాదాపు 8 కోట్ల మంది ప్రజల భాషగా ప్రాచుర్యం పొందింది. తెలుగును 'ఇటలియన్ ఆఫ్ ది ఈస్ట్' అని కూడా పిలుస్తారు, ఎందుకంటే దీనిలో ఎక్కువగా స్వరాలు ఉంటాయి. ఈ భాష సంస్కృతం మరియు ప్రాకృత భాషల ప్రభావంతో అభివృద్ధి చెందింది.",
    content2:
      "తెలుగు సాహిత్యంలో అనేక గొప్ప కవులు, రచయితలు తమ ముద్ర వేశారు. నన్నయ్య, తిక్కన్న, యేర్రప్రగడ వంటి కవులు మహాభారతాన్ని తెలుగులో అందించగా, శ్రీశ్రీ, విశ్వనాథ సత్యనారాయణ వంటి ప్రముఖులు ఆధునిక సాహిత్యాన్ని ప్రోత్సహించారు.",
  },
  english: {
    content1:
      "English is one of the most widely spoken languages in the world. It is the primary language for international communication, business, and technology. With its roots in Germanic languages, English has evolved over centuries by incorporating words from Latin, French, and other languages.",
    content2:
      "English is one of the most widely spoken languages in the world. It is the primary language for international communication, business, and technology. With its roots in Germanic languages, English has evolved over centuries by incorporating words from Latin, French, and other languages.",
  },
  hindi: {
    content1:
      "हिंदी भारत की सबसे अधिक बोली जाने वाली भाषाओं में से एक है। यह देवनागरी लिपि में लिखी जाती है और संस्कृत से प्रभावित है। हिंदी भाषा का प्रयोग प्रशासन, शिक्षा, और संचार के विभिन्न क्षेत्रों में किया जाता है।",
    content2:
      "हिंदी साहित्य में तुलसीदास, सूरदास, और कबीर जैसे कवियों का महत्वपूर्ण योगदान रहा है। आधुनिक काल में मुंशी प्रेमचंद, हरिवंश राय बच्चन, और महादेवी वर्मा ने हिंदी साहित्य को समृद्ध किया।",
  },
  tamil: {
    content1:
      "தமிழ் உலகின் பழமையான மொழிகளில் ஒன்றாகும். இது சங்க காலத்திலிருந்து வளர்ச்சியடைந்து வந்துள்ளது. தமிழ் இலக்கியம் திருக்குறள், சிலப்பதிகாரம், மணிமேகலை போன்ற முக்கிய நூல்களை கொண்டுள்ளது.",
    content2:
      "தமிழ் மொழி ஆந்தணரும் கலாச்சாரத்திலும் முக்கிய இடம் பெறுகிறது. இன்றும் தமிழ் திரைப்படங்கள், கவிதைகள், மற்றும் புத்தகங்கள் உலகளவில் பிரபலமாக இருக்கின்றன.",
  },
};
const BottomSection = () => {
  const { state } = useContext(StoreContext);
  const { mode ,bgChange } = state;
  const bgStyles=bgChange==='light'?'light':'dark'
  const bottomContent1 = (stateValue) => {
    switch (stateValue) {
      case "telugu":
        return data.telugu.content1;
      case "english":
        return data.english.content1;
      case "hindi":
        return data.hindi.content1;
      case "tamil":
        return data.tamil.content1;
      default:
        return;
    }
  };
  const bottomContent2 = (stateValue) => {
    switch (stateValue) {
      case "telugu":
        return data.telugu.content2;
      case "english":
        return data.english.content2;
      case "hindi":
        return data.hindi.content2;
      case "tamil":
        return data.tamil.content2;
      default:
        return;
    }
  };
  return (
    <div>
      <h1 className="bottomHead">Bottom Section</h1>
      <div className={`bottom ${bgStyles}`}>
        <p>{bottomContent1(mode)}</p>
        <p>{bottomContent2(mode)}</p>
      </div>
    </div>
  );
};

export default BottomSection;
