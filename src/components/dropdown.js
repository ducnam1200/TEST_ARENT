import { Button, Image, Link, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text, useDisclosure } from "@chakra-ui/react"
import { images } from "../constant"
import { useRef } from "react"

function Dropdown() {
    const initRef = useRef()
    const title = [
        {
            id: 1,
            title: "自分の記録",
            link: "/record"
        },
        {
            id: 2,
            title: "体重グラフ",
            link: "null"
        },
        {
            id: 3,
            title: "目標",
            link: "null"
        },
        {
            id: 4,
            title: "選択中のコース",
            link: "null"
        },
        {
            id: 5,
            title: "コラム一覧",
            link: "/recommended"
        },
        {
            id: 6,
            title: "設定",
            link: "null"
        },
    ]
    return (
        <Popover autoFocus={false} closeOnBlur={false} variants="none" placement='bottom-end'>
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        {
                            isOpen ? <Image src={images.menu} w="32px" h="32px" ml="16px" /> : <Image src={images.menu} w="32px" h="32px" ml="16px" />
                        }

                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent bg="#777777" mt="10px" borderRadius="0px" w="280px" >
                            {title.map(item =>
                                item.link === "null" ? <PopoverHeader pt="23px" pb="23px" pl="32px">
                                    <Text fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="18px" fontWeight="300" lineHeight="26px">
                                        {item.title}
                                    </Text>
                                </PopoverHeader> :
                                    <Link href={item.link}>
                                        <PopoverHeader pt="23px" pb="23px" pl="32px">
                                            <Text fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="18px" fontWeight="300" lineHeight="26px">
                                                {item.title}
                                            </Text>
                                        </PopoverHeader>
                                    </Link>

                            )}
                        </PopoverContent>
                    </Portal>
                </>
            )}
        </Popover>
    )
}

export default Dropdown