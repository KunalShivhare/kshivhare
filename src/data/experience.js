function calculateTimeDifference(fromDate) {
  const currentDate = new Date();
  const startDate = new Date(fromDate);

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years} years, ${months} months, and ${days} days`;
}

export const content = [
  {
    title: "Senior Full Stack Engineer",
    company: "Badho",
    timeline: "2022 July - Present",
    description: `Senior Software Engineer at Badho with ${calculateTimeDifference(
      "2022-07-01"
    )} years of experience of developing high-quality, scalable, and user-friendly applications. Expertise in React Native, ReactJS, NodeJS, Hasura, and AWS services like Lambda and S3. Proven track record of delivering successful projects by utilising Agile development methodologies. Skilled in developing front-end and back-end components, API Integration and troubleshooting complex issues. Experienced in working in cross-functional teams and promoting collaboration.`,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Senior Full Stack Engineer | Badho
      </div>
    ),
  },
];
