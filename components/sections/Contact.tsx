"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CONTACT_INFO } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  index: number;
}

function ContactCard({ icon, label, value, href, index }: ContactCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full bg-white rounded-lg border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="p-2 rounded-lg">
                {icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-heading font-bold text-neutral-charcoal mb-1">
                {label}
              </h3>
              <p className="text-sm font-body text-neutral-charcoal/60 break-words">
                {value}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block h-full"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export function Contact() {
  const contactCards = [
    {
      icon: (
        <Mail
          className="h-6 w-6 text-primary-maroon"
          strokeWidth={2}
          aria-hidden="true"
        />
      ),
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: (
        <Phone
          className="h-6 w-6 text-primary-maroon"
          strokeWidth={2}
          aria-hidden="true"
        />
      ),
      label: "Phone",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    },
    {
      icon: (
        <MessageCircle
          className="h-6 w-6 text-primary-maroon"
          strokeWidth={2}
          aria-hidden="true"
        />
      ),
      label: "WhatsApp",
      value: CONTACT_INFO.whatsapp,
      href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`,
    },
    {
      icon: (
        <MapPin
          className="h-6 w-6 text-primary-maroon"
          strokeWidth={2}
          aria-hidden="true"
        />
      ),
      label: "Location",
      value: CONTACT_INFO.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        CONTACT_INFO.location
      )}`,
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-neutral-offWhite">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-maroon mb-4">
            Contact Information
          </h2>
          <div className="w-24 h-1 bg-primary-maroon mx-auto"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactCards.map((card, index) => (
            <ContactCard
              key={card.label}
              icon={card.icon}
              label={card.label}
              value={card.value}
              href={card.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
