import { makeStyles, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { ModalConsumer } from '../../layouts/Layout';
import { v4 } from 'uuid';
import * as dayjs from 'dayjs';
import * as isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

const useHead = makeStyles((theme) => ({
    TableCell: {
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
    },
    price: {},
}));

export default function buyButtons({ mobileButtons, handleSetColumn }) {
    const discountValid = dayjs().isBetween('2021-05-17', dayjs('2021-07-01'));
    const discount = discountValid ? 699 : null;
    const buyButtons = [
        {
            price: 119,
            type: 'BuySketchUpShop',
        },
        {
            price: 299,
            type: 'BuySketchUpPro',
        },
        {
            price: 1199,
            type: 'BuySketchUpStudio',
        },
        {
            price: 55,
            type: 'BuySketchUpHigher',
        },
    ];

    const classes = useHead();

    return (
        <>
            <TableRow>
                <TableCell className={classes.TableCell}></TableCell>
                {!mobileButtons[1].hideMobileColumn && (
                    <ModalConsumer>
                        {({ handleOpenForm }) => (
                            <TableCell
                                className={classes.TableCell}
                                onMouseEnter={() => handleSetColumn(1)}
                            >
                                <div
                                    className='footer'
                                    onClick={() => handleOpenForm('')}
                                >
                                    FREE
                                </div>
                            </TableCell>
                        )}
                    </ModalConsumer>
                )}
                {buyButtons.map((item, index) => (
                    <React.Fragment key={index}>
                        {!mobileButtons[index + 2].hideMobileColumn && (
                            <ModalConsumer>
                                {({ handleOpenSoftModal }) => (
                                    <TableCell
                                        onMouseEnter={() =>
                                            handleSetColumn(index + 2)
                                        }
                                        onClick={handleOpenSoftModal(item.type)}
                                        className={classes.TableCell}
                                    >
                                        <div className='footer'>
                                            {item.type ===
                                                'BuySketchUpStudio' &&
                                            discount ? (
                                                <>
                                                    <strike className='price_text'>
                                                        {item.price}
                                                    </strike>
                                                    {discount}
                                                    <p className='text'>
                                                        USD в год
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    {item.price}
                                                    <p className='text'>
                                                        USD в год
                                                    </p>
                                                    <div className='buy_text'>
                                                        Купить
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </TableCell>
                                )}
                            </ModalConsumer>
                        )}
                    </React.Fragment>
                ))}
            </TableRow>
        </>
    );
}
