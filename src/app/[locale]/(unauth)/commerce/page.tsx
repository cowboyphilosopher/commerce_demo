import { getTranslations } from 'next-intl/server';

import PaymentButton from '@/components/PaymentButton';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Guestbook',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Commerce = () => {
  return (
    <>
      <PaymentButton />
      {/* <AddGuestbookForm />

      <Suspense fallback={<p>{t('loading_guestbook')}</p>}>
        <GuestbookList />
      </Suspense> */}
    </>
  );
};

export default Commerce;
