export default {
  footer: (
    <small
      style={{
        display: 'flex',
        marginTop: '8rem',
        justifyContent: 'space-between'
      }}
    >
      <a href="https://github.com/aidhand/website">Source code on GitHub</a>

      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
