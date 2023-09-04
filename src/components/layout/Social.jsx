export const Social = ({ Red, url }) => {
  return (
    <a
      href={url}
      className="social text-white p-1.5 rounded-full text-sm block cursor-pointer transition-transform hover:scale-110"
    >
      <Red />
    </a>
  );
};
