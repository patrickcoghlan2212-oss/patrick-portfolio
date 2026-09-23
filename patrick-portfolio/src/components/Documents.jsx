const documents = [
  {
    title: "Resume",
    file: "Patrick_Coghlan_Resume.pdf",
    description: "My education, technical skills, project experience and employment history.",
  },
  {
    title: "Cover Letter",
    file: "Patrick_Coghlan_Cover_Letter_General.pdf",
    description: "A general cover letter outlining my experience, background and approach to work.",
  },
];

function Documents() {
  return (
    <section id="documents" className="section" aria-labelledby="documents-heading">
      <p className="section-label">DOCUMENTS</p>
      <h2 id="documents-heading">Resume &amp; Cover Letter.</h2>
      <p className="section-description">
        Download a copy of my resume or general cover letter.
      </p>
      <div className="document-grid">
        {documents.map(({ title, file, description }) => (
          <a
            key={file}
            className="document-card"
            href={`${import.meta.env.BASE_URL}documents/${file}`}
            download={file}
            aria-label={`Download ${title} (PDF)`}
          >
            <svg className="document-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M14 2H5v20h14V7z M14 2v5h5 M8 12h8 M8 16h8" />
            </svg>
            <p className="document-type">PDF</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="document-download"><span aria-hidden="true">↓ </span>Download {title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Documents;
