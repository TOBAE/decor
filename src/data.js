import { MdOutlineChair } from 'react-icons/md'
import { BsImageFill } from 'react-icons/bs'
import {GiWoodenChair} from 'react-icons/gi'
import Rectangle4 from './images/Rectangle 4.png'
import Rectangle6 from './images/Rectangle 6.png'

export const card = {
  heading: "Why  You Should Choose Us ",
  items: [
    {
      icon: <MdOutlineChair />,
      image: <Rectangle4 />,
      title: "Best Material",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, vestibulum, mattis sit nulla tempor. Morbi nibh in nisi, ut egestas tellus sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, vestibulum, mattis sit nulla tempor. Morbi nibh in nisi, ut egestas tellus sed.",
    },
    {
      icon: <BsImageFill />,
      image: <Rectangle4 />,
      title: "Original Painting",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, vestibulum, mattis sit nulla tempor. Morbi nibh in nisi, ut egestas tellus sed.",
    },
    {
      icon: <GiWoodenChair />,
      image: <Rectangle6 />,
      title: "Latest Design ",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, vestibulum, mattis sit nulla tempor. Morbi nibh in nisi, ut egestas tellus sed.",
    },
  ],
};
