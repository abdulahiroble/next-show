import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import { Td } from './Table';
import Image from "next/image";

export const SkeletonRow = ({ sites }) => (
    <Box as="tr">

        {/* {sites?.popular?.results?.map((site) => (
            <Box as="tr" key={site.url}>
                <Td fontWeight="bold">
                    <Skeleton height="30px">
                        <Image width={200}
                            height={300}
                            src="/1200x0.jpg"
                            alt="banner"
                        />
                    </Skeleton>
                </Td>
            </Box>
        ))} */}


        {/* <Skeleton height="30px" isLoaded>
            <Image width={200}
                height={300}
                src="/1200x0.jpg"
                alt="banner"
            />
        </Skeleton> */}

        <Skeleton height="40px" />


    </Box>
);