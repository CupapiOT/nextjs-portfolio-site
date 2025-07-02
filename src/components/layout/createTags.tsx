export default function createTags(tags: string[]) {
  return (
    <>
      {tags.map((tagName) => (
        <li
          key={tagName}
          className="bg-neutral-700 text-gray-100 rounded-full py-0.5 px-3 text-sm"
        >
          {tagName}
        </li>
      ))}
    </>
  );
}
