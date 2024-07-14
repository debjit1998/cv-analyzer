import { FC, useContext } from "react";
import { motion } from "framer-motion";
import { Goal, Layers2, SquareFunction, Zap } from "lucide-react";
import AnimatedCircularProgress from "@/components/common/AnimatedCircularProgress";
import ResumeContext from "@/contexts/ResumeContext";
import { IScoreTyes } from "@/types";

interface ICardProps {
  title: string;
  icon: JSX.Element;
  property: string;
  index: number;
}

const cards = [
  {
    title: "ATS Score",
    property: "ats_score",
    icon: <Goal />,
  },
  {
    title: "Grammar",
    property: "grammar",
    icon: <SquareFunction />,
  },
  {
    title: "Brevity",
    property: "brevity",
    icon: <Layers2 />,
  },
  {
    title: "Effectiveness",
    property: "effectiveness",
    icon: <Zap />,
  },
];

const cardFadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 * index },
  }),
};

const Card: FC<ICardProps> = ({ title, icon, property, index }) => {
  const { resumeInformation } = useContext(ResumeContext)!;

  return (
    <motion.div
      variants={cardFadeInAnimation}
      initial="initial"
      animate="animate"
      custom={index}
      className="flex text-foreground items-center shadow-md bg-white rounded-lg p-4"
    >
      <div className="h-6 w-6 text-fuchsia-500">{icon}</div>
      <div className="ml-4 text-[18px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
        {title}
      </div>
      <div className="ml-auto h-10 w-10">
        <AnimatedCircularProgress
          textSize="24px"
          textColor="#000"
          pathColor="rgb(34 197 94)"
          value={resumeInformation[property as IScoreTyes]}
        />
      </div>
    </motion.div>
  );
};

const Scores = () => {
  return (
    <motion.div
      transition={{ delayChildren: 0.5, delay: 1 }}
      className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4"
    >
      {cards.map((card, index) => (
        <Card {...card} key={index} index={index} />
      ))}
    </motion.div>
  );
};

export default Scores;
