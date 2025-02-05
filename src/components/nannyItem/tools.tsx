const CommaSeparatedList: React.FC<{ values: string[] }> = ({ values }) => (
  <div className="flex flex-wrap gap-2">
    {values.map((item, index) => (
      <span key={index} className="text-base">
        {item.charAt(0).toUpperCase() + item.slice(1)}
        {index < values.length - 1 && ", "}
      </span>
    ))}
  </div>
);

export const InfoWrapper: React.FC<{
  label: string;
  value: string | string[];
}> = ({ label, value }) => {
  return (
    <div className="flex flex-row gap-[2px] px-[18px] py-3 rounded-[100px] bg-[#f2f4f7] mix-blend-multiply items-center">
      <span className="font-medium text-base text-[#8a8a89]">
        {label}:&nbsp;
      </span>
      {Array.isArray(value) ? (
        <CommaSeparatedList values={value} />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};
