import React from 'react'

import Item from '../Item'

import {IProduct} from '../../interfaces/products'

import {Table, Tbody} from '@chakra-ui/table'
import {Heading} from '@chakra-ui/layout'
import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel} from '@chakra-ui/accordion'

interface ICategoryLayoutProps  {
    name: string
    products: IProduct[]
}

const CategoryLayout:React.FC<ICategoryLayoutProps> = ({name, products}) => {
    const productList = products.map(item => {
        return <Item key={item.id} {...item} />
    })

    return (
        <AccordionItem>
            <AccordionButton>
                <Heading size="md">{name}</Heading>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                <Table w='100%' >
                    <Tbody>
                        {productList}
                    </Tbody>
                </Table>
            </AccordionPanel>
        </AccordionItem>
    )
}

export default CategoryLayout

