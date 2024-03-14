import { FC, HtmlHTMLAttributes } from "react";
import twitter from "../../assets/twitter.webp";
import { projectTags } from "../../lib/data";
import { cn } from "../../lib/utils";

interface ProjectProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const Project: FC<ProjectProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="text-white  font-fira ">
        <img src={twitter} alt="" />
        <div className="py-3">
          <h3 className="text-xl font-semibold tracking-tighter">
            TWITTER CLONE
          </h3>
          <div className="text-white italic text-sm  font-playfair flex flex-wrap">
            {projectTags.map((tag, index) => {
              return (
                <span key={index} className="pr-2 ">
                  {tag}
                </span>
              );
            })}
          </div>
          <p className="text-white/50 py-2">
            A Twitter clone built with React and Firebase. The users can edit
            their profile, follow and unfollow accounts, write and like tweets
            and visit other profiles. I made it possible for users to log in
            through Google or use the site as a guest to test the functionality.
          </p>
          <a
            className="font-semibold tracking-wide italic text-2xl font-playfair underline"
            href="/"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
