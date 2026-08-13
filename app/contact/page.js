import React from 'react';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Contact Us | Orange Virtual Global Solutions',
  description: 'Get in touch with Orange Virtual Global Solutions. Technology, AI and BPO partner for mid-size organizations worldwide.',
};

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: '40px' }}>
        <ContactSection />
      </div>
    </>
  );
}
