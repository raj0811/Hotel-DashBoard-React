import { gql } from "@apollo/client";
import { Int } from "graphql";

export const GET_USER = gql`
  query GetUserData {
    getUserData {
      id
      ownerName
      hotelName
      logo
      email
      number
      address {
        city
        state
        country
        streetAddress
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const GET_AVAIL_ROOMS = gql`
  query GetAvailRooms {
    getAvailRooms {
      _id
      roomNo
      hotel_id
      roomType
      description
      facilities
      capacity
      charges
      isBooked
      isOccupied
      status
    }
  }
`;

export const GET_BOOKED_ROOMS = gql`
  query GetBookings {
    getBookings {
      bookId
      room_id
      hotel_id
      roomNo
      roomType
      guestName
      numberOfGuest
      email
      number
      checkIn
      checkOut
      advancePayment
      advancePaymentMode
      status
      all_guets {
        name
        age
      }
      address {
        city
        state
        country
        streetAddress
      }
      additionalCharges {
        name
        charge
      }
    }
  }
`;

export const GET_GUEST_BOOKED_ROOMS = gql`
  query GetBookings {
    getBookings {
      bookId
      room_id
      hotel_id
      roomNo
      roomType
      guestName
      numberOfGuest
      email
      number
      checkIn
      checkOut
      advancePayment
      advancePaymentMode
      status
      all_guets {
        name
        age
      }
      address {
        city
        state
        country
        streetAddress
      }
      additionalCharges {
        name
        charge
      }
      _id
    }
  }
`;

export const CREATE_ROOM = gql`
  mutation CreateRoom(
    $roomNo: String!
    $roomType: String!
    $capacity: Float!
    $charges: Float!
    $description: String!
    $facilities: [String!]!
  ) {
    createRoom(
      roomNo: $roomNo
      roomType: $roomType
      capacity: $capacity
      charges: $charges
      description: $description
      facilities: $facilities
    )
  }
`;

export const BOOK_SINGLE_ROOM = gql`
  mutation BookSingleRoom(
    $roomId: String!
    $guestName: String!
    $numberOfGuest: Int!
    $age: Int!
    $all_guets: [allGuets!]!
    $email: String!
    $number: String!
    $address: addresses!
    $checkIn: String!
    $checkOut: String!
    $additionalCharges: [additionalChargesInfoInput!]!
    $advancePayment: Float!
    $advancePaymentMode: String!
    $occuping_now: Boolean!
  ) {
    bookSingleRoom(
      roomId: $roomId
      guestName: $guestName
      numberOfGuest: $numberOfGuest
      age: $age
      all_guets: $all_guets
      email: $email
      number: $number
      address: $address
      checkIn: $checkIn
      checkOut: $checkOut
      additionalCharges: $additionalCharges
      advancePayment: $advancePayment
      advancePaymentMode: $advancePaymentMode
      occuping_now: $occuping_now
    )
  }
`;
