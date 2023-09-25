'use client'
import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
import Kozak from '../../../public/kozak.png';



const AnyReactComponent = ({ text }: any) => <div className='flex flex-col items-center'>
    <Image src={Kozak} alt='kozak' width={48} height={48} />
    {text}</div>;

export const GoogleMap = async () => {
    const defaultProps = {
        center: {
            lat: 51.452452,
            lng: 33.188399
        },
        zoom: 11
    };

    return (<div style={{ height: '480px', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: `${process.env.NEXT_PUBLIC_MAP}` }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
        >

            <AnyReactComponent
                style={{ color: 'red' }}
                lat={51.452452}
                lng={33.188399}
            />
        </GoogleMapReact>
    </div>
    )
}
