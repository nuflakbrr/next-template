import { FC } from 'react';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';

import MaxWidthWrapper from '@/layouts/MaxWidthWrapper';

const data = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    desc: 'Get your assets delivered to your email in seconds and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    desc: 'Every asset on out platform is verified by our team to ensure our highest quality standard. Not happy? We offer a 30-day refund guarantee!',
  },
  {
    name: 'For the Planet',
    Icon: Leaf,
    desc: "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

const Features: FC = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {data.map((_x, _i) => (
            <div
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              key={_i}
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  <_x.Icon className="w-1/3 h-1/3" />
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {_x.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{_x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Features;
