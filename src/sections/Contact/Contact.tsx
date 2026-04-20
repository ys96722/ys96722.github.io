import React from "react"
import * as S from "./Contact.style"
import { SectionWrapper, SectionTitle } from "style/grid"
import * as Sec from "constants/SectionConstants"

const Contact: React.FC = () => {
  return (
    <SectionWrapper id={Sec.CONTACT}>
      <S.ContactInner>
        <SectionTitle style={{ marginBottom: '1rem' }}>Get in touch</SectionTitle>
        <S.ContactCopy>
          Open to new opportunities. Reach out on LinkedIn or by email.
        </S.ContactCopy>
        <S.ContactLinks>
          <S.ContactLink href="mailto:yoonsees@gmail.com">
            yoonsees@gmail.com
          </S.ContactLink>
          <S.ContactLink
            href="https://linkedin.com/in/yoonchang"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </S.ContactLink>
          <S.ContactLink
            href="https://github.com/ys96722"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </S.ContactLink>
        </S.ContactLinks>
        <S.ContactFooter>© {new Date().getFullYear()} Yoon Seok Chang</S.ContactFooter>
      </S.ContactInner>
    </SectionWrapper>
  )
}

export default Contact
