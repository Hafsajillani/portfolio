import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
      <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
        <DecoderText text="Hi there" start={visible} delay={500} />
      </Heading>
      <Text className={styles.description} data-visible={visible} size="l" as="p">
        I'm Hafsa Jillani, a web developer and designer currently interning remotely at{' '}
        <Link href="https://www.linkedin.com/company/nexium-global/posts/?feedView=all">Nexium</Link>. 
        My projects focus on creating interactive and user-friendly web experiences, including 
        AI-powered chat applications, 3D animation showcases, and responsive UI designs. 
        Explore my work on <Link href="https://github.com/Hafsajillani">GitHub</Link> or connect 
        with me on <Link href="https://www.linkedin.com/in/hafsa-jillani-26257523b/">LinkedIn</Link>.
      </Text>
      <Text className={styles.description} data-visible={visible} size="l" as="p">
        I'm passionate about building modern web applications with technologies like React, 
        Tailwind CSS, and JavaScript.
        I'm always open to new opportunities, so feel free to reach out!
      </Text>
    </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column} style={{ width: '100%' }}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
