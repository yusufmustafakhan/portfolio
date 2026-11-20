type Props = {
  code: string;
  title: string;
  issuer: string;
  earned: string;
  expiry: string;
  status: string;
  credential: string;
  color: string;
};

const statusStyles: Record<string, string> = {
  Active: "bg-green-600",
  Achieved: "bg-amber-600",
  Published: "bg-violet-600",
  Expired: "bg-red-600",
};

export default function CertificationCard({
  code,
  title,
  issuer,
  earned,
  expiry,
  status,
  credential,
  color,
}: Props) {
  const dateLabel = status === "Published" ? "Published" : "Earned";
  const statusColor = statusStyles[status] ?? "bg-slate-600";

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-2xl motion-reduce:hover:translate-y-0">
      <div className={`inline-block self-start rounded-lg px-4 py-2 text-sm font-bold text-white ${color}`}>
        {code}
      </div>

      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>

      {issuer && <p className="mt-2 text-slate-400">{issuer}</p>}

      <div className="mt-6 space-y-2 text-sm text-slate-300">
        {earned && (
          <p>
            {dateLabel}: {earned}
          </p>
        )}

        {expiry && <p>Expires: {expiry}</p>}

        <p>
          Status:
          <span className={`ml-2 rounded-full px-3 py-1 text-xs text-white ${statusColor}`}>
            {status}
          </span>
        </p>
      </div>

      {credential && (
        <div className="mt-auto pt-8">
          <a
            href={credential}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-500"
          >
            Verify Credential
          </a>
        </div>
      )}
    </div>
  );
}
