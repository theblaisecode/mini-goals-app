// import { FC } from "react";

// type Goal = {
//   title: string;
//   description: string;
// };

// function CourseGoal(props: Goal) {
//   return (
//     <article>
//       <div>
//         <h2>{props.title}</h2>
//         <p>{props.description}</p>
//       </div>

//       <button>Delete</button>
//     </article>
//   );
// }

// const CourseGoal: FC<Goal> = ({ title, description }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>

//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

// ---------------------------------------------
// import { type FC, type PropsWithChildren, type ReactNode } from "react";
import { type FC, type PropsWithChildren } from "react";

// interface Goal {
//   title: string;
//   description: string;
//   children: ReactNode;
// }

// OR

type Goal = PropsWithChildren<{
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}>;

// function CourseGoal({ title, description, children }: Goal) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>

//       {children}

//       <button>Delete</button>
//     </article>
//   );
// }

// OR

const CourseGoal: FC<Goal> = ({
  id,
  title,
  description,
  onDelete,
  children,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {children}

      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
